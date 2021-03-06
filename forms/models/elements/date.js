define(function (require) {
  'use strict';

  var ElementModel = require('forms/models/element');
  var moment = require('moment');

  return ElementModel.extend({

    defaults: function () {
      return Object.assign(ElementModel.prototype.defaults.call(this), {
        _time: '',
        _date: ''
      });
    },

    initialize: function () {
      var attr = this.attributes;
      var dateFormat = 'YYYY-MM-DD';
      var timeFormat;
      var dateValue = null;
      var timeValue = null;

      // native date field requires RFC3339
      // http://stackoverflow.com/questions/6982692/html5-input-type-date-default-value-to-today
      if (attr.nativeDatetimePicker) {
        attr.nativeDatetimePicker = parseInt(attr.nativeDatetimePicker, 10);
        if (attr.nativeDatetimePicker === 1) {
          attr.dateFormat = 'YYYY-MM-DD';
        }
      }
      if (attr.nativeDatePicker) {
        attr.nativeDatePicker = parseInt(attr.nativeDatePicker, 10);
        if (attr.nativeDatePicker === 1) {
          attr.dateFormat = 'YYYY-MM-DD';
        }
      }
      if (attr.nativeTimePicker) {
        attr.nativeTimePicker = parseInt(attr.nativeTimePicker, 10);
      }

      /* THIS CODE NEEDS TO BE REMOVED WITH PLATFORM 2.26+ */
      if (attr.picker) {
        switch (attr.picker) {
          case 'shown':
            attr.readonly = true;
            break;
          case 'hidden':
            attr.hidden = true;
            break;
          default:
            break;
        }
      }

      ElementModel.prototype.initialize.call(this);
      this.on('change:_date change:_time', this.prepareValue);
      this.on('change:value', this.prepareDateTime);
      if (attr.defaultValue) {
        switch (attr.type) {
          case 'date':
            if (attr.defaultValue === 'now') {
              dateValue = moment();
            } else if (attr.defaultValue === 'now_plus') {
              dateValue = moment().add(parseInt(attr.defaultDateNowPlus, 10), 'd');
            } else if (attr.defaultValue === 'date') {
              dateValue = moment(Date.parse(attr.defaultDateDate));
            }
            if (dateValue !== null) {
              this.set('_date', dateValue.format(dateFormat));
            }
            break;
          case 'time':
            timeFormat = this.mapTimeFormats[attr.timeFormat] || 'HH:mm';
            if (attr.defaultValue === 'now') {
              timeValue = moment();
            } else if (attr.defaultValue === 'now_plus') {
              timeValue = moment().add(parseInt(attr.nowPlusAmount, 10), 'm');
            }
            if (timeValue !== null) {
              this.set('_time', timeValue.format(timeFormat));
            }
            break;
          case 'datetime':
            timeFormat = this.mapTimeFormats[attr.timeFormat] || 'HH:mm';
            if (attr.defaultValue === 'now') {
              timeValue = dateValue = moment();
            } else if (attr.defaultValue === 'now_plus') {
              timeValue = dateValue = moment();
              timeValue.add('m', parseInt(attr.nowPlusAmount, 10));
            }
            if (dateValue !== null) {
              this.attributes._date = dateValue.format(dateFormat);
              this.trigger('change:_date');
            }
            if (timeValue !== null) {
              this.attributes._time = timeValue.format(timeFormat);
              this.trigger('change:_time');
            }
            break;
          default:
        }
      }
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;
      var attr = this.attributes;

      this.removeView();
      if (attr.readonly) {
        View = Forms._views.ReadOnlyElement;
        view = new View({model: this});
      } else if (attr.nativeDatetimePicker === 1 ||
          attr.nativeDatePicker === 1 ||
          attr.nativeTimePicker === 1) {
        view = new Forms._views.DateElement({model: this});
      } else {
        view = new Forms._views.DatePickadateElement({model: this});
      }
      this.set('_view', view);
    },

    /**
     * update value to match _date and/or _time
     */
    prepareValue: function () {
      var attrs = this.attributes;
      var type = attrs.type;
      var date;
      var time;
      var value = '';

      if (type === 'date') {
        this.set('value', attrs._date);
      } else if (type === 'time') {
        this.set('value', attrs._time);
      } else { // type === 'datetime'
        date = attrs._date;
        time = attrs._time;
        // TODO: somehow stop this from firing twice
        if (!date && time) {
          date = '0000-00-00';
        }
        if (!time && date && date !== '0000-00-00' && moment(date, ['YYYY-MM-DD'], true).isValid()) {
          time = '00:00';
        }
        if (time && date) {
          value = date + 'T' + time;
        }
        this.set('value', value);
      }
    },

    /**
     * update _date and/or _time to match value
     */
    prepareDateTime: function () {
      var attrs = this.attributes;
      var type = attrs.type;
      var value = attrs.value || '';
      var time;
      var date;
      var parts;
      var timepart = '';
      var datepart = '';

      if (type === 'date') {
        this.set('_date', value);
      } else if (type === 'time') {
        this.set('_time', value);
      } else { // type === 'datetime'
        time = attrs._time;
        date = attrs._date;
        parts = value.split('T');

        if (parts[0]) {
          datepart = parts[0];
        }
        if (parts[1]) {
          timepart = parts[1];
        }
        this.set('_date', datepart, {silent: true});
        this.set('_time', timepart, {silent: true});
        if (time !== attrs._time) {
          this.trigger('change:_time');
        }
        if (date !== attrs._date) {
          this.trigger('change:_date');
        }
      }
    },
    /**
     * @return {Date} a JavaScript Date object.
     */
    toDate: function () {
      var type = this.attributes.type;
      var iso;

      if (type === 'date') {
        return new Date(this.attributes._date);
      }
      if (type === 'time') {
        iso = (new Date()).toISOString();
        return iso.replace(/T[0-9.:Z+\-]*$/, 'T' + this.attributes._time);
      }
      // type === 'datetime'
      return new Date(this.attributes._date + 'T' + this.attributes._time);
    },

    isInvalidFormat: function (dateFormat, value) {
      if (value && value !== '0000-00-00' && !moment(value, [dateFormat], true).isValid()) {
        throw new Error(this.attributes.name + ' expect value in format ' + dateFormat);
      }
    },

    mapDateFormats: {
      yyyy_mm_dd: 'YYYY-MM-DD',
      mm_dd_yyyy: 'MM-DD-YYYY',
      dd_mm_yyyy2: 'DD/MM/YYYY',
      yyyy_mm_dd2: 'YYYY/MM/DD',
      mm_dd_yyyy2: 'MM/DD/YYYY',
      dd_mm_yyyy: 'DD-MM-YYYY'
    },
    mapTimeFormats: {
      'hh:mm': 'HH:mm',
      hh_mm_ss: 'HH:mm', // HH:MM:SS
      h_mm_ss: 'hh:mm A', // HH:MM:SS AM/PM %r
      h_mm: 'hh:mm A' // HH:MM AM/PM
    }
  });
});

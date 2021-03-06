define(function () {
  return [
    {
      'default': {
        name: 'form1',
        label: 'Form 1',
        _elements: [
          {
            'default': {
              name: 'datetime',
              label: 'Date + Time',
              type: 'datetime',
              defaultValue: 'now'
            }
          },
          {
            'default': {
              name: 'name',
              label: 'Name',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'age',
              label: 'Age',
              type: 'number',
              section: 'col1'
            }
          },
          {
            'default': {
              name: 'weight',
              label: 'Weight',
              type: 'number',
              section: 'col2'
            }
          },
          {
            'default': {
              name: 'UpperCase',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'comments',
              label: 'Comments',
              type: 'subForm',
              subForm: 'form2'
            }
          }
        ],
        _sections: [
          {
            'default': {
              name: 'grid',
              'class': 'ui-responsive ui-grid-a'
            }
          },
          {
            'default': {
              name: 'col1',
              'class': 'ui-block-a',
              section: 'grid'
            }
          },
          {
            'default': {
              name: 'col2',
              'class': 'ui-block-b',
              section: 'grid'
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'form2',
        label: 'Form 2',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'comment',
              label: 'Comment',
              type: 'textarea'
            }
          }
        ]
      }
    }
  ];
});

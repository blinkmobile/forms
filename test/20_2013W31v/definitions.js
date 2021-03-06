define(function () {
  return [
    {
      'default': {
        'uniqueNameId': '56m',
        'name': 'subform',
        'formDescription': '',
        'defaultCategory': '',
        'maxStep': 4,
        'labelPlacement': null,
        'header': null,
        'footer': null,
        '_elements': [
          {
            'default': {
              'name': 'id',
              'type': 'text',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'subform_text',
              'type': 'text',
              'label': 'Subform Text',
              'page': 0
            }
          }
        ],
        '_checks': [],
        '_actions': [],
        '_behaviours': []
      },
      'list': {
        'interaction': '',
        'displayName': '',
        'defaultCategory': '',
        'header': null,
        'footer': null,
        'hidden': null,
        'action': 'list',
        'orderBy': null,
        'showLink': {
          'edit': 1,
          'view': 1,
          'delete': 1
        },
        'dataStorageList': null,
        'downloadModeList': null,
        'recordsToDisplay': null,
        '_elements': [
          'subform_text'
        ]
      },
      'search': {
        'interaction': null,
        'displayName': null,
        'defaultCategory': null,
        'header': null,
        'footer': null,
        'hidden': null,
        'action': 'search'
      },
      'add': {
        'interaction': '',
        'displayName': '',
        'defaultCategory': '',
        'header': null,
        'footer': null,
        'hidden': null,
        'action': 'add',
        '_elements': [
          'subform_text'
        ]
      },
      'edit': {
        'interaction': '',
        'displayName': '',
        'defaultCategory': '',
        'header': null,
        'footer': null,
        'hidden': '1',
        'action': 'edit',
        '_elements': [
          'subform_text'
        ]
      },
      'view': {
        'interaction': '',
        'displayName': '',
        'defaultCategory': '',
        'header': null,
        'footer': null,
        'hidden': '1',
        'action': 'view',
        '_elements': [
          'subform_text'
        ]
      },
      'delete': {
        'interaction': '',
        'displayName': '',
        'defaultCategory': '',
        'header': null,
        'footer': null,
        'hidden': '1',
        'action': 'delete',
        '_elements': [
          'subform_text'
        ]
      }
    },
    {
      'default': {
        'uniqueNameId': '6im',
        'name': 'test_form',
        'formDescription': 'Form for integration testing',
        'defaultCategory': '25960',
        'maxStep': 6,
        'labelPlacement': 'auto',
        'header': '<h1>Form Header<\/h1>',
        'footer': '<h1>Form Footer<\/h1>',
        '_elements': [
          {
            'default': {
              'name': 'id',
              'type': 'text',
              'page': 0
            }
          },
          {
            'default': {
              'name': '_heading_1',
              'type': 'heading',
              'headingText': 'heading',
              'headingSmallText': 'Heading',
              'headingPosition': 'left',
              'headingFontFace': 'arial',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'text_box',
              'type': 'text',
              'label': 'Text Box',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'characterLimit': '5',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'text_area',
              'type': 'textarea',
              'label': 'Text Area',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'password',
              'type': 'password',
              'label': 'Password',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'email',
              'type': 'email',
              'label': 'Email',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'url',
              'type': 'url',
              'label': 'URL',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'phone_number',
              'type': 'telephone',
              'label': 'Phone Number',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'number',
              'type': 'number',
              'label': 'Number',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'currency',
              'type': 'number',
              'label': 'Currency',
              'page': 0
            }
          },
          {
            'default': {
              'name': 'calculation',
              'type': 'message',
              'label': 'Calculation',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'showTextbox': 'show',
              'calculationType': 'auto',
              'buttonText': 'Calculate',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'showTextbox': 'show'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'radio_buttons',
              'type': 'select',
              'label': 'Radio Buttons',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'One': 'One',
                'Two': 'Two',
                'Three': 'Three'
              },
              'mode': 'expanded',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'select_box',
              'type': 'select',
              'label': 'Select Box',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'One': 'One',
                'Two': 'Two',
                'Three': 'Three'
              },
              'dataSource': 'static',
              'mode': 'collapsed',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            }
          },
          {
            'default': {
              'name': 'star_rating',
              'type': 'number',
              'label': 'Star Rating',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'graphical',
              'graphic': {
                'active': {
                  'ascii': '*'
                },
                'inactive': {
                  'ascii': '*'
                }
              },
              'min': '0',
              'max': '5'
            }
          },
          {
            'default': {
              'name': 'multi_select',
              'type': 'multi',
              'label': 'Multi Select',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'One': 'One',
                'Two': 'Two',
                'Three': 'Three'
              },
              'mode': 'collapsed',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'collapsed'
            }
          },
          {
            'default': {
              'name': 'checkboxes',
              'type': 'multi',
              'label': 'Checkboxes',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'One': 'One',
                'Two': 'Two',
                'Three': 'Three'
              },
              'mode': 'expanded',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'checkbox',
              'type': 'boolean',
              'label': 'Checkbox',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              },
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'y': 'y',
                'n': 'n'
              }
            }
          },
          {
            'default': {
              'name': 'date',
              'type': 'date',
              'label': 'Date',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'defaultValue': null,
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'defaultValue': null
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'defaultValue': null
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'defaultValue': null
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'defaultValue': null
            }
          },
          {
            'default': {
              'name': 'time',
              'type': 'time',
              'label': 'Time',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'timeFormat': 'hh_mm',
              'minuteStep': '1',
              'defaultValue': null,
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            }
          },
          {
            'default': {
              'name': 'date_time',
              'type': 'datetime',
              'label': 'Date + Time',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy',
              'timeFormat': 'hh_mm',
              'minuteStep': '1',
              'defaultValue': null,
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': null
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'timeFormat': 'hh_mm',
              'defaultValue': null
            }
          },
          {
            'default': {
              'name': 'camera',
              'type': 'file',
              'label': 'Camera',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image\/*'
            }
          },
          {
            'default': {
              'name': 'image_library',
              'type': 'file',
              'label': 'Image Library',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'accept': 'image\/*'
            }
          },
          {
            'default': {
              'name': 'file_upload',
              'type': 'file',
              'label': 'File Upload',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'location',
              'type': 'location',
              'label': 'Location',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'sketch_signature',
              'type': 'draw',
              'label': 'Sketch \/ Signature',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'size': 'signature'
            }
          },
          {
            'default': {
              'name': '_heading_3',
              'type': 'heading',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'headingText': 'Weird Fields',
              'headingType': '2',
              'headingPosition': 'left',
              'headingFontFace': 'arial',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'value',
              'type': 'text',
              'label': 'Value',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'logged_in_user_id',
              'type': 'text',
              'label': 'Logged in User ID',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'user_attribute',
              'type': 'text',
              'label': 'User Attribute',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'get_value',
              'type': 'text',
              'label': 'GET Value',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': '_heading_2',
              'type': 'heading',
              'headingText': 'page',
              'headingSmallText': 'Page Break',
              'headingPageBreak': '1',
              'headingPosition': 'left',
              'headingFontFace': 'arial',
              'page': 1
            }
          },
          {
            'default': {
              'name': 'conditional_radio',
              'type': 'select',
              'label': 'Conditional Radio',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'options': {
                'On': 'On',
                'Off': 'Off'
              },
              'mode': 'expanded',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'conditional_calc',
              'type': 'message',
              'label': 'Conditional Calc',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'showTextbox': 'show',
              'calculationType': 'auto',
              'buttonText': 'Calculate',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'search': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'showTextbox': 'show'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'subform',
              'type': 'subForm',
              'subForm': 'subform',
              'page': 1
            }
          }
        ],
        '_checks': [
          {
            'default': {
              'name': 'conditionalRadioIsOn',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'conditional_radio'
                    ]
                  },
                  'On'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'conditionalRadioIsOff',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'conditional_radio'
                    ]
                  },
                  'Off'
                ]
              }
            }
          }
        ],
        '_actions': [
          {
            'default': {
              'name': 'showConditionalCalc',
              'manipulations': [
                {
                  'target': 'conditional_calc',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'hideConditionalCalc',
              'manipulations': [
                {
                  'target': 'conditional_calc',
                  'properties': {
                    'hidden': true,
                    'persist': false
                  }
                }
              ]
            }
          },
          {
            'default': {
              'javascript': '1 + 1',
              'outputTarget': 'calculation',
              'name': 'CALC_calculation'
            }
          },
          {
            'default': {
              'javascript': '"[conditional_radio]"',
              'outputTarget': 'conditional_calc',
              'name': 'CALC_conditional_calc'
            }
          }
        ],
        '_behaviours': [
          {
            'default': {
              'name': 'showConditionalCalc_conditionalRadioIsOn',
              'trigger': {
                'formElements': '*'
              },
              'check': 'conditionalRadioIsOn',
              'actions': [
                {
                  'action': 'showConditionalCalc',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'hideConditionalCalc_conditionalRadioIsOff',
              'trigger': {
                'formElements': '*'
              },
              'check': 'conditionalRadioIsOff',
              'actions': [
                {
                  'action': 'hideConditionalCalc',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'auto_calculations',
              'formElements': '*',
              'actions': [
                'CALC_calculation',
                'CALC_conditional_calc'
              ]
            }
          }
        ]
      },
      'list': {
        'interaction': 'TEST_FORM_LIST',
        'displayName': 'TEST_FORM LIST',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': null,
        'action': 'list',
        'orderBy': null,
        'showLink': {
          'edit': '1',
          'view': '1',
          'delete': '1'
        },
        'dataStorageList': 'temporary',
        'downloadModeList': 'partial',
        'recordsToDisplay': '',
        '_elements': [
          'text_box',
          'text_area',
          'password'
        ]
      },
      'search': {
        'interaction': 'TEST_FORM_SEARCH',
        'displayName': 'TEST_FORM_SEARCH',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': null,
        'action': 'search'
      },
      'add': {
        'interaction': 'TEST_FORM_ADD',
        'displayName': 'TEST_FORM ADD',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': null,
        'action': 'add',
        '_elements': [
          '_heading_1',
          'text_box',
          'text_area',
          'password',
          'email',
          'url',
          'phone_number',
          'number',
          'currency',
          'calculation',
          'radio_buttons',
          'select_box',
          'star_rating',
          'multi_select',
          'checkboxes',
          'checkbox',
          'date',
          'time',
          'date_time',
          'camera',
          'image_library',
          'file_upload',
          'location',
          'sketch_signature',
          '_heading_3',
          'value',
          'logged_in_user_id',
          'user_attribute',
          'get_value',
          '_heading_2',
          'conditional_radio',
          'conditional_calc',
          'subform'
        ]
      },
      'edit': {
        'interaction': 'TEST_FORM_EDIT',
        'displayName': 'TEST_FORM EDIT',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'edit',
        '_elements': [
          '_heading_1',
          'text_box',
          'text_area',
          'password',
          'email',
          'url',
          'phone_number',
          'number',
          'currency',
          'calculation',
          'radio_buttons',
          'select_box',
          'star_rating',
          'multi_select',
          'checkboxes',
          'checkbox',
          'date',
          'time',
          'date_time',
          'camera',
          'image_library',
          'file_upload',
          'location',
          'sketch_signature',
          '_heading_3',
          'value',
          'logged_in_user_id',
          'user_attribute',
          'get_value',
          '_heading_2',
          'conditional_radio',
          'conditional_calc',
          'subform'
        ]
      },
      'view': {
        'interaction': 'TEST_FORM_VIEW',
        'displayName': 'TEST_FORM VIEW',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'view',
        '_elements': [
          '_heading_1',
          'text_box',
          'text_area',
          'password',
          'email',
          'url',
          'phone_number',
          'number',
          'currency',
          'calculation',
          'radio_buttons',
          'select_box',
          'star_rating',
          'multi_select',
          'checkboxes',
          'checkbox',
          'date',
          'time',
          'date_time',
          'camera',
          'image_library',
          'file_upload',
          'location',
          'sketch_signature',
          '_heading_3',
          'value',
          'logged_in_user_id',
          'user_attribute',
          'get_value',
          '_heading_2',
          'conditional_radio',
          'conditional_calc',
          'subform'
        ]
      },
      'delete': {
        'interaction': 'TEST_FORM_DELETE',
        'displayName': 'TEST_FORM DELETE',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'delete',
        '_elements': [
          '_heading_1',
          'text_box',
          'text_area',
          'password',
          'email',
          'url',
          'phone_number',
          'number',
          'currency',
          'calculation',
          'radio_buttons',
          'select_box',
          'star_rating',
          'multi_select',
          'checkboxes',
          'checkbox',
          'date',
          'time',
          'date_time',
          'camera',
          'image_library',
          'file_upload',
          'location',
          'sketch_signature',
          '_heading_3',
          'value',
          'logged_in_user_id',
          'user_attribute',
          'get_value',
          '_heading_2',
          'conditional_radio',
          'conditional_calc',
          'subform'
        ]
      }
    }
  ];
});

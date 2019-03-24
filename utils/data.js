exports.home = {
  home: {
    title: 'MiAndHue',
    description: 'A Smart Home Raspberry Pi project connecting Philips Hue With Xiaomi Vacuum cleaners',
    authors: 'Carl Ejnarsson (ce222qw) and Joel Carlsson (jc222mw)'
  },
  model: {
    name: 'My WoT Raspberry PI',
    description: 'A WoT project with Raspberry PI connecting Philips Hue with Xiaomi S50 Vacuum.',
    manufacturer: 'Raspberry Pi',
    model: 'Raspberry Pi 3',
    tags: [
      'raspberry',
      'pi',
      'hue',
      'philips',
      'philips hue',
      'xiaomi',
      'mi',
      'smart home',
      'IoT',
      'WoT'
    ]
  },
  actions: {
    title: 'List of actions',
    resources: {
      autoClean: {
        method: 'POST',
        name: 'Set Autonomous Clean Event',
        description: 'Create event for autonomus cleaning dependent on days since last clean, hours since last movement in home and time of the day',
        values: {
          name: {
            type: 'string',
            string: 'Name of event by choice',
            required: 'true'
          },
          fromHour: {
            type: 'enum',
            enum: '0-23',
            required: 'true'
          },
          toHour: {
            type: 'enum',
            enum: '0-23',
            required: 'true'
          },
          daysSinceLast: {
            type: 'enum',
            enum: '0-99',
            required: 'true'
          },
          noMovement: {
            type: 'enum',
            enum: '0-23',
            required: 'true'
          }
        },
        id: {
          method: 'DEL',
          name: 'Remove Autonomus Clean Event',
          description: 'Remove Autonomus Clean Event'
        }
      }
    }
  },
  properties: {
    title: 'List of properties',
    resources: {
      autoClean: {
        method: 'GET',
        name: 'Get Autonomous Clean Event',
        description: 'Get all events for autonomus cleaning dependent on days since last clean, hours since last movement in home and time of the day'
      }
    }
  },
  things: {
    title: 'List of other connected units',
    resources: {
      hue: {
        method: 'GET',
        name: 'Get Philips Hue API',
        description: 'Get info about Philips Hue gateway and connected devices and what they can do'
      },
      vacuum: {
        method: 'GET',
        name: 'Get vacuum API',
        description: 'Get all data about Xiaomi vacuum cleaner its properties and actions'
      }
    }
  }
}

exports.vacuum = {
  home: {
    title: 'Xiaomi S50',
    description: 'Xiaomi Vacuum cleaner'
  },
  model: {
    title: 'Xiaomi S50',
    description: 'Xiaomi Vacuum cleaner',
    manufacturer: 'Xiaomi',
    model: 'V2 (S50)',
    tags: [
      'xiaomi',
      'mi',
      'smart home',
      'IoT',
      'WoT'
    ]
  },
  actions: {
    title: 'List of actions',
    resources: {
      state: {
        method: 'POST',
        name: 'Change vacuum states',
        description: 'Make the vacuum start a cleaning session or go back to dock',
        values: {
          cleanState: {
            type: 'bool',
            required: 'false'
          },
          dockState: {
            type: 'bool',
            required: 'false'
          }
        }
      }
    }
  },
  properties: {
    title: 'List of properties',
    description: 'Get current status of battery, cleanState and cleanLog',
    resources: {
      batteryLevel: {
        method: 'GET',
        name: 'Battery level',
        description: 'Get current battery level in percent'
      },
      cleanState: {
        method: 'GET',
        name: 'Is Cleaning',
        description: 'Get current status if the vecuum is cleaning'
      },
      cleanLog: {
        method: 'GET',
        name: 'Cleaning log',
        description: 'Get array with timestamps of twenty ten last cleans'
      }
    }
  },
  things: {
    title: 'List of other connected units',
    resources: {
      hue: {
        method: 'GET',
        name: 'Get Philips Hue API',
        description: 'Get info about Philips Hue gateway and connected devices and what they can do'
      },
      vacuum: {
        method: 'GET',
        name: 'Get vacuum API',
        description: 'Get all data about Xiaomi vacuum cleaner its properties and actions'
      }
    }
  }
}

exports.hue = {
  home: {
    title: 'Philip Hue',
    description: 'Philips Hue Gateway'
  },
  model: {
    title: 'Philip Hue',
    description: 'Philips Hue Gateway',
    manufacturer: 'Philips',
    model: '2015',
    tags: [
      'hue',
      'philips',
      'philips hue',
      'smart home',
      'IoT',
      'WoT'
    ]
  }
}

exports.lights = {
  home: {
    title: 'Philips hue Lights',
    description: 'All Lights inside Philips Hue system'
  },
  properties: {
    title: 'List of properties',
    description: 'Get current status for every light',
    resources: {
      state: {
        method: 'GET',
        name: 'Light state',
        description: 'Get current state of light'
      }
    }
  },
  id: {
    home: {
      title: 'Specific Light',
      description: 'Light in Philips Hue system'
    },
    model: {
      tags: [
        'hue',
        'philips hue',
        'smart home',
        'IoT',
        'WoT'
      ]
    },
    actions: {
      title: 'List of actions',
      resources: {
        state: {
          method: 'POST',
          name: 'Change lights state',
          description: 'Change value of current light.',
          values: {
            lightState: {
              type: 'bool',
              required: 'false'
            },
            brightness: {
              type: 'enum',
              enum: '0-100',
              required: 'false'
            },
            color: {
              type: 'object',
              object: {
                r: {
                  type: 'enum',
                  enum: '0-255'
                },
                g: {
                  type: 'enum',
                  enum: '0-255'
                },
                b: {
                  type: 'enum',
                  enum: '0-255'
                }
              },
              required: 'false'
            }
          }
        }
      }
    },
    properties: {
      title: 'List of properties',
      description: 'Get current values of current light',
      resources: {
        state: {
          method: 'GET',
          name: 'Light state',
          description: 'Get current state of the light'
        }
      }
    }
  }
}

exports.rooms = {
  home: {
    title: 'Philips hue Light Groups',
    description: 'All light groups in category rooms inside Philips Hue system'
  },
  properties: {
    title: 'List of properties',
    description: 'Get current status for every room',
    resources: {
      state: {
        method: 'GET',
        name: 'Room state',
        description: 'Get current state of all rooms'
      }
    }
  },
  id: {
    home: {
      title: 'Specific room',
      description: 'Room in Philips Hue system'
    },
    model: {
      tags: [
        'hue',
        'philips hue',
        'smart home',
        'IoT',
        'WoT'
      ]
    },
    actions: {
      title: 'List of actions',
      resources: {
        state: {
          method: 'POST',
          name: 'Change rooms state',
          description: 'Change value of current room.',
          values: {
            lightState: {
              type: 'bool',
              required: 'false'
            },
            brightness: {
              type: 'enum',
              enum: '0-100',
              required: 'false'
            },
            color: {
              type: 'object',
              object: {
                r: {
                  type: 'enum',
                  enum: '0-255'
                },
                g: {
                  type: 'enum',
                  enum: '0-255'
                },
                b: {
                  type: 'enum',
                  enum: '0-255'
                }
              },
              required: 'false'
            }
          }
        }
      }
    },
    properties: {
      title: 'List of properties',
      description: 'Get current values of current room',
      resources: {
        state: {
          method: 'GET',
          name: 'Light state',
          description: 'Get current state of the room'
        }
      }
    }
  }
}

exports.sensors = {
  home: {
    title: 'Sensors connected to Philips hue gateway',
    description: 'All sensors inside the Philips Hue system'
  },
  properties: {
    title: 'List of properties',
    description: 'Get current status for every sensor',
    resources: {
      state: {
        method: 'GET',
        name: 'Sensor state',
        description: 'Get current state of all sensors'
      }
    }
  },
  id: {
    home: {
      title: 'Specific sensor',
      description: 'Sensor in Philips Hue system'
    },
    model: {
      tags: [
        'hue',
        'philips hue',
        'smart home',
        'IoT',
        'WoT'
      ]
    },
    properties: {
      title: 'List of properties',
      description: 'Get current values of current sensor',
      resources: {
        state: {
          method: 'GET',
          name: 'Sensors state',
          description: 'Get current state of the sensor'
        }
      }
    }
  }
}

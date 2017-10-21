'use strict';

var accordion = document.getElementsByClassName('accordion');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  };
}

function doCopy() {
  var copyText = document.getElementById('copyText');
  copyText.select();
  try{
    var successful = document.execCommand('copy');
    var message = successful ? 'successful':'unsuccessful';
    console.log('copied'); 
  } catch (err){
    console.log('error when copying');
  }
}
$(function(){
  new Clipboard('.copy-text');
});
var particlesJS;
particlesJS('particles-js', {
  'particles': {
    'number': {
      'value': 96,
      'density': {
        'enable': true,
        'value_area': 800
      }
    },
    'color': {
      'value': '#ffffff'
    },
    'shape': {
      'type': 'edge',
      'stroke': {
        'width': 0,
        'color': '#000000'
      },
      'polygon': {
        'nb_sides': 3
      },
      'image': {
        'src': 'img/github.svg',
        'width': 100,
        'height': 100
      }
    },
    'opacity': {
      'value': 0.3472249623182,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 1.5,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 40,
        'size_min': 0.1,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false,
      'distance': 94.69771699587272,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 2,
      'direction': 'top',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 1200
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': true,
        'mode': 'repulse'
      },
      'onclick': {
        'enable': true,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 400,
        'size': 40,
        'duration': 2,
        'opacity': 8,
        'speed': 3
      },
      'repulse': {
        'distance': 200,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
});
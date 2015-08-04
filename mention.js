
	div = document.getElementById('mention');
	var a= new Awesomplete(div, {
	  minChars: 1,
	  autoFirst: true,
	  list: [
	    { id:1, last_name: 'Mark' },
	      { id:2, last_name: 'David' },
	        { id:3, last_name: 'Peter' },
	          { id:4, last_name: 'Don' },
	            { id:5, last_name: 'Martin' },
	             { id:6, last_name: 'Margarita' },
	              { id:7, last_name: 'John' }

	  ],
	  mentionChar: '@',
	  filter: function (text, input) {
      	return RegExp(input.trim(), 'i').test(text.last_name);
	  },
	  item: function(obj, input) {
	    return Awesomplete.$.create('li', {
	      innerHTML: obj.last_name.replace(RegExp(input.trim(), 'gi'), '<mark>$&</mark>'),
	      'aria-selected': 'false',
	      'data-id': obj.id
	    });
	  },
	  replace: function(text, dataset) {
	    var after, before, mentionMatch, val;
	    mentionMatch = this.mentionFilter();
	    if (mentionMatch != null) {
	      before = mentionMatch.input.substring(0, mentionMatch.index + mentionMatch.charIndex);
	      after = mentionMatch.input.substring(mentionMatch.index + mentionMatch[0].length, this.input.innerHTML.length);
	    }
	    this.input.innerHTML = before + ("<span class='mention'  unselectable='on' contenteditable='false' data-mention=" + dataset.id + ">") + text + '</span> ' + after;
	    return  Awesomplete.$.placeCaretAtEnd(this.input);
	  }
	});
	

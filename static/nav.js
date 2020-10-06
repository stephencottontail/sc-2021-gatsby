( function() {
	var button = document.getElementById( 'nav-toggle' );
	var menu = document.getElementById( 'nav' );
	var text = button.getElementsByClassName( 'screen-reader-text' )[0];

	button.addEventListener( 'click', function( e ) {
		e.preventDefault();

		menu.classList.toggle( 'nav-active' );

		if ( menu.classList.contains( 'nav-active' ) ) {
			text.innerHTML = 'Close Menu';
		} else {
			text.innerHTML = 'Open Menu';
		}
	} );
} )();

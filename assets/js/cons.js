const asciiArt = () => {
	console.log(
		'%cThis place is where I was supposed to post job openings, but currently I need one :P',
		'background: #212121; color: #f69510; padding: 10px; font-size: 16px '
	);
	console.log(
		`
████████╗██╗   ██╗███████╗██╗  ██╗ █████╗ ██████╗         
╚══██╔══╝██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗        
   ██║   ██║   ██║███████╗███████║███████║██████╔╝        
   ██║   ██║   ██║╚════██║██╔══██║██╔══██║██╔══██╗        
   ██║   ╚██████╔╝███████║██║  ██║██║  ██║██║  ██║        
   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝        
                                                          `
	);

	console.log(
		"%c Let's talk! :D",
		'background: #212121; color: #f69510; padding: 6px;'
	);
	console.log = () => {};
	console.error = () => {};
};

asciiArt();

const manageConsole = () => {
	console.clear();
	console.log(
		'%cThis place is where I was supposed to post job openings, but currently I need one :P',
		'background: #f4f4f4; color: #001d3d; padding: 10px; margin: 20px 0px; font-size: 16px;  border-radius: 2px'
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
		"%c Let's talk! :D ",
		'background: #000814; color: #f4f4f4; padding: 6px; border-radius: 5px; margin: 10px; font-size: 16px'
	);
	console.log = () => {};
	console.error = () => {};
	console.info = () => {};
	console.warn = () => {};
	console.clear = () => {};
};

manageConsole();

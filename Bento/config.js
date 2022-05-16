// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Samael',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '72dd4a2adaac1c5546149b605c241b81', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.227510',
	defaultLongitude: '-118.371140',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'film',
			id: '1',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Plex',
					link: 'https://app.plex.tv/desktop/#!/',
				},
				{
					name: 'FMovies',
					link: 'https://fmovies.to/home',
				},
				{
					name: '9Anime',
					link: 'https://9anime.vc/',
				},
			],
		},
		{
			icon: 'book-open',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'IGN',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'GBATemp',
					link: 'https://www.trello.com',
				},
				{
					name: 'AltPress',
					link: 'https://www.altpress.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'download',
			id: '1',
			links: [
				{
					name: 'TorrentGalaxy',
					link: 'https://torrentgalaxy.to/',
				},
				{
					name: '1337x',
					link: 'https://www.reddit.com',
				},
				{
					name: 'RARBG',
					link: 'https://rarbg.to/index80.php',
				},
				{
					name: 'Nyaa',
					link: 'https://nyaa.si/',
				},
			],
		},
		{
			icon: 'mail',
			id: '2',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
				{
					name: 'G2A',
					link: 'https://www.g2a.com/',
				},
				{
					name: 'FFXIV Store',
					link: 'https://store.finalfantasyxiv.com/ffxivstore/en-us/',
				},
				{
					name: 'FFXIV Mog Station',
					link: 'https://secure.square-enix.com/oauth/oa/oauthlogin%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fsecure.square-enix.com%252Faccount%252Fapp%252Fsvc%252Ftop%253Frequest%253Dmogstation%26client_id%3Dffxiv_mog%26alar%3D1%26lang%3Den-us%26facflg%3D1',
				},
			],
		},
	],
};

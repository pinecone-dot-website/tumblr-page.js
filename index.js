<script type="text/javascript">
// variables wrapped in quotes without JS prefix are for 404 page compat
var tumblr_page = {
	blog_url: {JSBlogURL},
	description: {JSDescription},
	meta_description: {JSMetaDescription},
	
	page_current: {JSCurrentPage},
	page_next: '{NextPage}',
	page_previous: '{PreviousPage}',
	page_total: {JSTotalPages},

	post_next: '{NextPost}',
	post_previous: '{PreviousPost}',

	{block:DayPage} 
		day_page: true,
		index_page: false,
		permalink_page: true,
		search_page: false,
		tag_page: false,

		page: {
			next: {JSNextDayPage},
			previous: {JSPreviousDayPage}
		},
	{/block:DayPage} 

	{block:IndexPage}
		day_page: false,
		index_page: true,
		permalink_page: false,
		search_page: false,
		tag_page: false,

		page: {
			next: '',
			previous: ''
		},
	{/block:IndexPage},

	{block:PermalinkPage} 
		day_page: false,
		index_page: false,
		permalink_page: true,
		search_page: false,
		tag_page: false,

		page: {
			next: '',
			previous: ''
		},
	{/block:PermalinkPage} 

	{block:SearchPage}
		day_page: false,
		index_page: false,
		permalink_page: false,
		search_page: true,
		tag_page: false,

		page: {
			next: '',
			previous: ''
		},
	{/block:SearchPage}

	{block:TagPage}
		day_page: false,
		index_page: false,
		permalink_page: false,
		search_page: false,
		tag_page: true,

		page: {
			next: '',
			previous: ''
		},
	{/block:TagPage}

	posts: [ {block:Posts}
		{block:Text}
			{
				body: {JSBody},
				date: {
					day_of_month: '{DayOfMonth}',
					day_of_week: '{DayOfWeek}',
					day_of_week_short: '{ShortDayOfWeek}',
					day_of_year: '{DayOfYear}',
					hour_12: '{12Hour}',
					hour_24: '{24Hour}',
					month: '{Month}',
					time_age: '{TimeAgo}',
					time_stamp: '{Timestamp}',
					year: '{Year}'
				},
				id: '{PostID}',	
				notes_count: {JSNoteCount},
				permalink: '{Permalink}',			
				post_notes_url: '{PostNotesURL}', 	
				post_type: {JSPostType},
				short_url: '{ShortURL}',
				title: {JSTitle},
				tags: [ {block:Tags}
					{
						tag: {JSTag},
						url: {JSTagURL},
						url_chrono: {JSTagURLChrono}
					},
				{/block:Tags} ]
			},
		{/block:Text}
	{/block:Posts} ],

	rss: {JSRSS},
	search_query: {JSSearchQuery},
	title: {JSTitle}
}
</script>

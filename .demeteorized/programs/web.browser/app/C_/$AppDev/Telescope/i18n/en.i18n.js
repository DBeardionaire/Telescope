(function(){var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"menu":"Menu","view":"View","top":"Top","new":"New","best":"Best","digest":"Digest","scheduled":"Scheduled","users":"Users","settings":"Settings","admin":"Admin","post":"Post","toolbox":"Toolbox","sign_up_sign_in":"Register/Sign In","my_account":"My Account","view_profile":"View Profile","edit_account":"Edit Account","view_your_profile":"View your profile","edit_your_profile":"Edit your profile","new_posts":"New Posts","title":"Title","description":"Description","siteUrl":"Site URL","tagline":"Tagline","requireViewInvite":"Require Invite to View","requirePostInvite":"Require Invite to Post","requirePostsApproval":"Require Posts to be Approved","defaultEmail":"Default Email","scoreUpdateInterval":"Score Update Interval","defaultView":"Default View","postInterval":"Post Interval","commentInterval":"Comment Interval","maxPostsPerDay":"Max Posts Per Day","startInvitesCount":"Invites Start Count","postsPerPage":"Posts Per Page","logoUrl":"Logo URL","logoHeight":"Logo Height","logoWidth":"Logo Width","language":"Language","backgroundCSS":"Background CSS","buttonColor":"Button Color","buttonTextColor":"Button Text Color","headerColor":"Header Color","headerTextColor":"Header Text Color","twitterAccount":"Twitter Account","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Footer Code","extraCode":"Extra Code","emailFooter":"Email Footer","notes":"Notes","debug":"Debug Mode","fontUrl":"Font URL","fontFamily":"Font Family","authMethods":"Authentication Methods","faviconUrl":"Favicon URL","mailURL":"MailURL","postsLayout":"Posts Layout","siteImage":"Site Image","general":"General","invites":"Invites","email":"Email","scoring":"Scoring","posts":"Posts","comments":"comments","logo":"Logo","extras":"Extras","colors":"Colors","integrations":"Integrations","accentColor":"Accent Color","accentContrastColor":"Accent Contrast Color","secondaryColor":"Secondary Color","secondaryContrastColor":"Secondary Contrast Color","postViews":"Post Views","navLayout":"Navigation Layout","mailUrl":"Mail URL","createdAt":"Created At","postedAt":"Posted At","url":"URL","body":"Body","htmlBody":"HTML Body","viewCount":"View Count","commentCount":"Comment Count","commenters":"Commenters","lastCommentedAt":"Last Commented At","clickCount":"Click Count","baseScore":"Base Score","upvotes":"Upvotes","upvoters":"Upvoters","downvotes":"Downvotes","downvoters":"Downvoters","score":"score","status":"status","sticky":"Sticky","inactive":"inactive","author":"Author","userId":"User","sorry_we_couldnt_find_any_posts":"Sorry, we couldn't find any posts.","your_comment_has_been_deleted":"Your comment has been deleted.","comment_":"Comment","delete_comment":"Delete Comment","add_comment":"Add Comment","upvote":"upvote","downvote":"downvote","link":"link","edit":"Edit","reply":"Reply","no_comments":"No comments.","please_sign_in_to_reply":"Please sign in to reply","you_are_already_logged_in":"You are already logged in","sorry_this_is_a_private_site_please_sign_up_first":"Sorry, this is a private site. Please register first.","thanks_for_signing_up":"Thanks for registering!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"The site is currently invite-only, but we will let you know as soon as a spot opens up.","sorry_you_dont_have_the_rights_to_view_this_page":"Sorry, you don't have the rights to view this page.","sorry_you_do_not_have_the_rights_to_comments":"Sorry, you do not have the rights to leave comments at this time.","not_found":"Not Found!","were_sorry_whatever_you_were_looking_for_isnt_here":"We're sorry; whatever you were looking for isn't here..","disallowed_property_detected":"Disallowed property detected","no_notifications":"No notifications","1_notification":"1 notification","notifications":"notifications","mark_all_as_read":"Mark all as read","your_post_has_been_deleted":"Your post has been deleted.","created":"Created","suggest_title":"Suggest title","short_url":"Short URL","category":"Category","inactive_":"Inactive?","sticky_":"Sticky?","submission_date":"Submission Date","submission_time":"Submission Time","date":"Date","submission":"Submission","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Note: this post is still pending so it has no submission timestamp yet.","user":"User","status_":"Status","approved":"Approved","rejected":"Rejected","delete_post":"Delete Post","thanks_your_post_is_awaiting_approval":"Thanks, your post is awaiting approval.","sorry_couldnt_find_a_title":"Sorry, couldn't find a title...","please_fill_in_an_url_first":"Please fill in an URL first!","share":"Share","discuss":"Discuss","upvote_":"Upvote","votes":"votes","basescore":"baseScore","clicks":"clicks","views":"views","comment":"comment","point":"point","points":"points","please_complete_your_profile_below_before_continuing":"Please complete your profile below before continuing.","account":"Account","username":"Username","display_name":"Display Name","bio":"Bio:","city":"City","twitter_username":"Twitter Username","github_username":"GitHub Username","site_url":"Site URL","password":"Password","change_password":"Change Password?","old_password":"Old Password","new_password":"New Password","email_notifications":"Email Notifications","new_users":"New users","comments_on_my_posts":"Comments on my posts","replies_to_my_comments":"Replies to my comments","forgot_password":"Forgot password?","profile_updated":"Profile updated","please_fill_in_your_email_below_to_finish_signing_up":"Please fill in your email below to finish the registration.","invite":"Invite","uninvite":"Uninvite","make_admin":"Make admin","unadmin":"Unadmin","delete_user":"Delete User","are_you_sure_you_want_to_delete":"Are you sure you want to delete ","reset_password":"Reset Password","password_reset_link_sent":"Password reset link sent!","name":"Name:","comments_":"Comments","karma":"Karma","is_invited":"Is Invited?","is_admin":"Is Admin?","delete":"Delete","member_since":"Member since","edit_profile":"Edit profile","sign_in":"Sign In","sign_in_":"Sign in!","sign_up_":"Register!","dont_have_an_account":"Don't have an account?","already_have_an_account":"Already have an account?","sign_up":"Register","please_fill_in_all_fields":"Please fill in all fields","invite_":"Invite ","left":" left","invite_none_left":"Invite (none left)","all":"All","invited":"Invited?","uninvited":"Uninvited","filter_by":"Filter by","sort_by":"Sort by","sorry_you_do_not_have_access_to_this_page":"Sorry, you do not have access to this page","please_sign_in_first":"Please Sign In First.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sorry, you  have to be an admin to view this page.","sorry_you_dont_have_permissions_to_add_new_items":"Sorry, you don't have permissions to add new items.","sorry_you_cannot_edit_this_post":"Sorry, you cannot edit this post.","sorry_you_cannot_edit_this_comment":"Sorry, you cannot edit this comment.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"You need to login and be an admin to add a new category.","you_need_to_login_or_be_invited_to_post_new_comments":"You need to login or be invited to post new comments.","please_wait":"Please wait ","seconds_before_commenting_again":" seconds before commenting again","your_comment_is_empty":"Your comment is empty.","you_dont_have_permission_to_delete_this_comment":"You don't have permission to delete this comment.","you_need_to_login_or_be_invited_to_post_new_stories":"You need to login or be invited to post new stories.","please_fill_in_a_headline":"Please fill in a headline","this_link_has_already_been_posted":"This link has already been posted","sorry_you_cannot_submit_more_than":"Sorry, you cannot submit more than ","posts_per_day":" posts per day","someone_replied_to_your_comment_on":"Someone replied to your comment on","has_replied_to_your_comment_on":" has replied to your comment on","read_more":"Read more","a_new_comment_on_your_post":"A new comment on your post","you_have_a_new_comment_by":"You have a new comment by ","on_your_post":" on your post","has_created_a_new_post":" has created a new post","your_account_has_been_approved":"Your account has been approved.","welcome_to":"Welcome to ","start_posting":"Start posting.","please_fill_in_a_title":"Please fill in a title","seconds_before_posting_again":" seconds before posting again","upvoted":"Upvoted","posted_date":"Posted Date","posted_time":"Posted Time","profile":"Profile","sign_out":"Sign Out","you_ve_been_signed_out":"You've been signed out. Come back soon!","invitedcount":"InvitedCount","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Upvoted Posts","downvoted_posts":"Downvoted Posts","mark_as_read":"Mark as read","pending":"Pending","loading":"Loading...","submit":"Submit","you_must_be_logged_in":"You must be logged in.","are_you_sure":"Are you sure?","please_log_in_first":"Please log in first.","please_log_in_to_comment":"Please log in to comment.","sign_in_sign_up_with_twitter":"Register/Sign Up with Twitter","load_more":"Load More","most_popular_posts":"The most popular posts right now.","newest_posts":"The newest posts.","highest_ranked_posts_ever":"The all-time highest-ranked posts.","the_profile_of":"The profile of","posts_awaiting_moderation":"Posts awaiting moderation.","future_scheduled_posts":"Future scheduled posts.","users_dashboard":"Users dashboard.","telescope_settings_panel":"Telescope settings panel.","various_utilities":"Various utilities."};
TAPi18n._loadLangFileObject("en", translations);

})();

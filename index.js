var Profile;
(function (Profile) {
    Profile[Profile["Admin"] = 1] = "Admin";
    Profile[Profile["User"] = 2] = "User";
    Profile[Profile["Guest"] = 3] = "Guest";
})(Profile || (Profile = {}));
var profile = Profile.Admin;
console.log(profile);

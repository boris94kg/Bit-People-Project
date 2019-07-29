class User {
    constructor(userObj) {
        this.name = userObj.name.first;
        this.lastName = userObj.name.last;
        this.email = userObj.email;
        this.image = userObj.picture.thumbnail;
        this.largeImage = userObj.picture.large;
        this.dob = userObj.dob.date;
        this.gender = userObj.gender;

    }

    hideEmail = () => {
        const splitedEmail = this.email.slice(-15);
        const hiddenEmail = `${(this.email.slice(0, 3).concat('...'))}${splitedEmail}`;

        return hiddenEmail;
    }

    getFormatDate = () => {
        const dateObj = new Date(this.dob);
        return `${dateObj.getDate()}-${(dateObj.getMonth() + 1)}-${dateObj.getFullYear()}`;
    }

    getFullName = () => {
        return `${this.name.charAt(0).toUpperCase() + this.name.slice(1)} ${this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)}`;

    }

    isFemale = () => {
        return this.gender === 'female';
    }
}
export { User }
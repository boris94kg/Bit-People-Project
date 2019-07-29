import React from "react";
import { AboutHeader } from '../partials/AboutHeader.js';

const About = (props) => {
    return (
        <React.Fragment>
            <AboutHeader title="BitPeople" />
            <div className="container about-holder">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mt-5 mb-3"> About</h1>
                        <p>Suspendisse lacinia, libero eu ornare maximus, augue lacus feugiat ex, commodo dapibus est felis vel purus. Morbi id dignissim nisl, id vestibulum risus. Morbi iaculis, metus eu suscipit tempus, risus diam tristique nibh, egestas suscipit tellus massa in nulla. Aliquam erat volutpat. Curabitur fermentum suscipit dolor, vel ornare est facilisis ut. Aliquam consectetur tellus mi, eget interdum nibh gravida sed. Nullam dignissim sagittis semper. Nullam aliquet non elit eget euismod. Aliquam congue enim eget urna suscipit vulputate. Nullam non enim congue massa viverra pretium posuere vitae nulla. Phasellus in ipsum ligula. Nulla a rhoncus ipsum, consectetur vestibulum odio. Ut molestie aliquam diam nec tincidunt. Vestibulum fermentum nulla ac turpis luctus ornare. Mauris viverra sapien nec risus laoreet, vitae tempus massa molestie.</p>
                        <h3 className="mb-3 mt-4">What We Do</h3>
                        <p className="mb-5">Suspendisse lacinia, libero eu ornare maximus, augue lacus feugiat ex, commodo dapibus est felis vel purus. Morbi id dignissim nisl, id vestibulum risus. Morbi iaculis, metus eu suscipit tempus, risus diam tristique nibh, egestas suscipit tellus massa in nulla. Aliquam erat volutpat. Curabitur fermentum suscipit dolor, vel ornare est facilisis ut. Aliquam consectetur tellus mi, eget interdum nibh gravida sed. Nullam dignissim sagittis semper. Nullam aliquet non elit eget euismod. Aliquam congue enim eget urna suscipit vulputate. Nullam non enim congue massa viverra pretium posuere vitae nulla. Phasellus in ipsum ligula. Nulla a rhoncus ipsum, consectetur vestibulum odio. Ut molestie aliquam diam nec tincidunt. Vestibulum fermentum nulla ac turpis luctus ornare. Mauris viverra sapien nec risus laoreet, vitae tempus massa molestie.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;
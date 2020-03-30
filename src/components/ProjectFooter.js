import React, { Fragment } from 'react';
import Section from 'components/Section';
import { NavLink, Link } from 'react-router-dom'
import { projects } from 'shared/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ProjectFooter = () => {
    return (
        <Section noAnimation adjustPadding>
            <div className="row align-items-center">
                <div className="col-md-2 order-md-last d-flex justify-content-md-end conditional-margin">
                    <button className="fab" onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}>
                        <FontAwesomeIcon icon={faChevronUp} size="md" />
                    </button>
                </div>
                <div className="col-md-10 order-md-first">
                    <div className="pf" style={{ display: 'inline-block' }}>
                        <Link to="/">
                            All
                        </Link>
                    {
                        projects.map((item, index) => {
                            return (
                                <Fragment>
                                    <span> / </span>
                                    <NavLink to={item.location}>
                                        {item.label}
                                    </NavLink>
                                </Fragment>

                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default ProjectFooter;

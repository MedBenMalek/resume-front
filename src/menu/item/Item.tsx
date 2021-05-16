import React, { Fragment } from 'react';
import './Item.scss'
import {ReactComponent as SVGSkills} from '../../assets/skills.svg';
import {ReactComponent as SVGEducation} from '../../assets/education.svg';
import {ReactComponent as SVGExperience} from '../../assets/experience.svg';
import ImgProfile from '../../assets/profile.jpg';

type ItemProps = {
  class: string,
  text: string,
}

let SVGElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | any;

const Item = (props: ItemProps) => {

  switch (props.class) {
    case 'skills' :
      SVGElement = SVGSkills;
      break;
    case 'experience' :
      SVGElement = SVGEducation;
      break;
    case 'education' :
      SVGElement = SVGExperience;
      break;
  }
  
  return (
    <div className={`item ${ props.class }`}>
      { props.class === 'profile' ?
        <img src={ImgProfile} alt="Profile"></img> :
        (
          <Fragment>
            <SVGElement className="svg-item" width= "55px"  />
            <span>{ props.text }</span>
          </Fragment>
        )
      }
    </div>
  );
}

export default Item;

import './Content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Date from '../components/Date';

const building = <FontAwesomeIcon className="icon" icon={faBuilding} />

const Content = () => {

  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementById('side-menu')!.clientHeight;
    setMenuHeight(height);
  }, []);

  return (
    <div className="conatiner">
      <h1 className="title">Experience</h1>
      <div className="content-conatiner" style={{ minHeight: menuHeight}}>  
        <div className="side-menu" id="side-menu">
          <div className="side-menu-item">
            <span className="icon-container">{building}</span>
            <span className="line"></span>
            <span className="side-menu-item-text">Encore lab - Software engenner</span>
          </div>
        </div>
        <section>
          <article>
            <h1 className="title">Encore lab</h1>
            <p>My mission inside encore lab is lead most of the projects, keep maintenance and create innovative solutions</p>
          </article>
          <div className="details">
            <div className="d-flex align-items-center justify-content-between">
              <Date date="17 Jan, 2020" text="Date from"/>
              <Date date="Today" text="Date to"/>
            </div>
            <p>
            <strong>About the company: </strong>
            Encore-Lab is a technology company whose mission is to help its clients be more competitive by offering innovative solutions 
            that improve their products, services or processes.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Content;
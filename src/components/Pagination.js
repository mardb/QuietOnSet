import React from 'react';

const Pagination = (props) => {
 const pageNumberLink = [];

 for(let i = 1; i <=props.pages + 1; i++){
  let active = props.currentPage === i ? 'active' : '';
  pageNumberLink.push(<li className={`waves-effect ${active}`} key={i} onClick={()=> props.nextPage(i)}>
    <a href="#!">{i}</a>
  </li>)
 }

 return(
   <div className="container">
     <div className="row">
       <ul className="pagination">
        {
          pageNumberLink
        }
       </ul>
     </div>
   </div>
 )
}

export default Pagination;
import React,{useRef, useState} from 'react';
import "./Information.css";

export default function Information() {

    const [closeList, setCloseList] = useState(false); // 얘가 열고접는 스위치역할이 된다.
    const listRef = useRef(null); 	      // useRef 로 특정 DOM 에 접근할 거다.

    function foldList() {
        if (!listRef || !listRef.current) {			      // useRef 변수가 비었을 때
          return;						      // 그냥 리턴하도록 예외처리를 해주자
        }
        
        const style = listRef.current.style;  // 접근할 DOM 요소의 스타일 속성을 미리 선언해둔다.
     
        if (closeList) {			  // closeAllList 상태변수가 true 일 때 
          style.maxHeight = '0'; 	  	  // maxHeight 는 0이 되고 접힌다.
        } else if (!closeList) {	  	  // closeAllList 상태변수가 false 면 
          style.maxHeight = 		
              `${listRef.current.scrollHeight}px`; // maxHeight = scroll 길이가 되고 메뉴가 열린다.
        }
        setCloseList(!closeList);		  // 클릭할 때마다 상태를 반대로 바꾼다.
      }

    return ( 
        <>
            <div>메뉴리스트</div>
            <button
         className={`${closeList ? 'close' : 'open'}`}  
         onClick={foldList}				
      >
        hi
        </button>
        <div className="content" ref={listRef}>
        1
        </div>

        </>
    );
} 
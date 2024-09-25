//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main.css';

const Main  = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    return (
        <>
            <div id="wrap">

                <div id="header" class="clearfix">
                    <h1>
                        <Link to="">MySite</Link>
                    </h1>

                    {/* <!-- 
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><a href="" class="btn_s">로그아웃</a></li>
                        <li><a href="" class="btn_s">회원정보수정</a></li>
                    </ul>
                    -->	 */}
                    <ul>
                        <li><Link to="" class="btn_s">로그인</Link></li>
                        <li><Link to="" class="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>
                {/* <!-- //header --> */}

                <div id="nav">
                    <ul class="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><aLink to="">갤러리</aLink></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}


                <div id="container" class="clearfix">
                    {/* <!-- aside 없음 --> */}
                    <div id="full-content">
                    
                        {/* <!-- content-head 없음 --> */}
                        <div id="main"> 
                        
                            <img id="profile-img" src="./images/profile.jpg" alt = "프로필 사진"/>
                            
                            <div id="greetings">
                                <p class="text-xlarge">
                                    <span class="bold">안녕하세요!!<br/>
                                    김유찬의 MySite에 오신 것을 환영합니다.<br/>
                                    <br/>
                                    이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br/>
                                    </span>
                                    <br/>
                                    사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br/>
                                    jsp&serlvet(모델2) 방식으로 제작되었습니다.<br/>
                                    <br/>
                                    자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br/>
                                    배운 거 있는거 없는 거 다 합쳐서 만들어 놓은 사이트 입니다.<br/>
                                    <br/>
                                    (자유롭게 꾸며보세요!!)<br/>
                                    <br/><br/>
                                    <Link class="" to="">[방명록에 글 남기기]</Link>
                                </p>	
                            </div>
                            {/* <!-- //greetings --> */}
                            
                            <div class="clear"></div>
                            
                        </div>
                        {/* <!-- //index --> */}
                        
                    </div>
                    {/* <!-- //full-content --> */}
                    

                </div>
                {/* <!-- //container --> */}


                <div id="footer">
                    Copyright ⓒ 2020 황일영. All right reserved
                </div>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default Main;

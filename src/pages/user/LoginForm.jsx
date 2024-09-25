import React, {useState}  from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

//css
import '../../css/user.css';

const LoginForm = () => {
    /*---라우터 관련-------------------------------*/
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPassword] = useState('');
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    const handleId = (e) => {
        console.log(e.target.value);
        setId(e.target.value);
    }
    const handlePw = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(id, pw);

        const userVo = {
            userId: id,
            userPw: pw
        }
        console.log(userVo);
        //로그인 로직
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/mysite',
            data: userVo,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            responseType: 'json'
        }).then(response => {
            console.log(response);
            if(response.data.result ==='success'){
                alert('회원가입 성공');
                navigate('/');
            }else{
                alert('회원가입 실패');
            }
        })
    }

    return (
        <>
            <div id="wrap">

                <div id="header" className="clearfix">
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
                        <li><Link to="" className="btn_s">로그인</Link></li>
                        <li><Link to="" className="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>
                {/* <!-- //header --> */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="" onSubmit = {handleLogin}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} onChange = {handleId} placeholder="아이디를 입력하세요"/>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                        <input type="text" id="input-pass" name="" value={pw} onChange = {handlePw} placeholder="비밀번호를 입력하세요"	/>
                                    </div>

                                    
                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>
                                    
                                </form>
                            </div>
                            {/* <!-- //loginForm --> */}
                        </div>
                        {/* <!-- //user --> */}
                    </div>
                    {/* <!-- //content  --> */}
                    
                </div>
                {/* <!-- //container  --> */}

                <div id="footer">
                    Copyright ⓒ 2020 황일영. All right reserved
                </div>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    )
}

export default LoginForm;
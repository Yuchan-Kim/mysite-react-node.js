import React, {useState}  from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../include/Footer';
import Header from '../include/Header';

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
            userId: id
        }
        console.log(userVo);
        //로그인 로직
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/users/login`,
            data: userVo,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            responseType: 'json'
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data.apiData); //수신데이타

            ;    
            //해더에서 토큰꺼내기
            const token =response.headers['authorization'].split(' ')[1];
            console.log(token);

            //로컬스토리지에 토큰저장
            localStorage.setItem("token", token);
            //로컬스토리지에 authUser저장
            localStorage.setItem("authUser", JSON.stringify(response.data.apiData));


            navigate("/");

        }).catch (error => {
            console.log(error);
        });
    }

    return (
        <>
            <div id="wrap">

                {/* <!-- header + nav --> */}
                <Header/>
                {/* <!-- header + nav --> */}

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
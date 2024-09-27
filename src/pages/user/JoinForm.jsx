//import 라이브러리
import React, {useState}  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../include/Footer';
import Header from '../include/Header';

import '../../css/user.css';

const JoinForm  = () => {
    /*---라우터 관련-------------------------------*/
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    const handleId = (e) => {
        setId(e.target.value);
    }
    const handlePw = (e) => {
        setPassword(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleJoin = (e) => {
        e.preventDefault();
        const userVo = {
            userId: id,
            userPw: pw,
            userName: name,
            userGender: gender
        }
        console.log(userVo);

        axios({
            method: 'post',
            url: 'http://localhost:9000/api/users/registration',
            data: userVo,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            responseType: 'json'
        }).then(response => {
            console.log(response);
            if(response.data.result ==='success'){
                alert('회원가입 성공');
                navigate('/user/joinok');
            }else{
                alert('회원가입 실패');
            }
        })
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
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="joinForm">
                                <form action="" method="" onSubmit={handleJoin}>

                                    {/* <!-- 아이디 --> */}
                                    <div class="form-group">
                                        <label className="form-text" for="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} placeholder="아이디를 입력하세요" onChange = {handleId}/>
                                        <button type="button" id="">중복체크</button>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" for="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={pw} placeholder="비밀번호를 입력하세요" onChange = {handlePw}/>
                                    </div>

                                    {/* <!-- 이메일 --> */}
                                    <div className="form-group">
                                        <label className="form-text" for="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} placeholder="이름을 입력하세요" onChange = {handleName}/>
                                    </div>

                                    {/* <!-- //나이 --> */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label for="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="" value="male" checked = {gender === 'male'} onChange = {handleGender} /> 
                                        
                                        <label for="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="" value="female" checked = {gender === 'female'} onChange = {handleGender} /> 

                                    </div>

                                    {/* <!-- 약관동의 --> */}
                                    <div className="form-group">
                                        <span className="form-text">약관동의</span> 
                                        
                                        <input type="checkbox" id="chk-agree" value="" name="" required/>
                                        <label for="chk-agree">서비스 약관에 동의합니다.</label> 
                                    </div>
                                    
                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원가입</button>
                                    </div>
                                    
                                </form>
                            </div>
                            {/* <!-- //joinForm --> */}
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
    );
}

export default JoinForm;

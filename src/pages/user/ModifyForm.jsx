//import 라이브러리
import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../include/Footer';
import Header from '../include/Header';

import '../../css/main.css';

const ModifyForm = () => {
    /*---라우터 관련-------------------------------*/
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    /*---일반 변수 -----------------------------*/
    const token = localStorage.getItem('token');

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    const handlePw = (e) => {
        setPw(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const handleModify = (e) => {
        e.preventDefault()
        console.log('수정');
        const userVo = {
            userPw: pw,
            userName: name,
            userGender: gender
        }
        axios({
            method: 'put',
            url: `http://localhost:9000/api/users/me`,
            headers: { 'Content-Type': 'application/json; charset=UTF-8', Authorization: `Bearer ${token}` },
            data: userVo,
            responseType: 'json' // 수신타입
        }).then((response) => {
            console.log(response); // 수신데이터
            console.log(response.data.apiData);
            const authUser = response.data.apiData;
            console.log(JSON.stringify(authUser));
            localStorage.setItem("authUser", JSON.stringify(authUser));

            if (response.data.result === "success") {
                alert('회원정보 수정 성공');
                navigate('/');
            }else{
                alert('회원정보 수정 실패');
                navigate('/');
            }

            


        }).catch((err) => {
            console.log(err);
        });
    };


    useEffect(() => {
        console.log('마운트완료');

        axios({
            method: 'get',
            url: `http://localhost:9000/api/users/me`,
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'json' // 수신타입
        }).then((response) => {
            console.log(response.data); // 수신데이터
            if (response.data.result === 'success') {
                setId(response.data.apiData.userId);
                setPw(response.data.apiData.userPw);
                setName(response.data.apiData.userName);
                setGender(response.data.apiData.userGender);
            } else {
                // alert("토큰 불일치");
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);

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
                            <h3>회원정보</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원정보</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="modifyForm">
                                <form action="" method="" onSubmit ={handleModify}>
                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <span className="text-large bold" >{id}</span>
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input
                                            type="text"
                                            id="input-pass"
                                            name=""
                                            value={pw}
                                            onChange={handlePw}
                                            placeholder="비밀번호를 입력하세요"
                                        />
                                    </div>

                                    {/* <!-- 이름 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input
                                            type="text"
                                            id="input-name"
                                            name=""
                                            value={name}
                                            onChange={handleName}
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>

                                    {/* <!-- 성별 --> */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span>

                                        <label htmlFor="rdo-male">남</label>
                                        <input
                                            type="radio"
                                            id="rdo-male"
                                            name="gender"
                                            value="male"
                                            checked={gender === 'male'}
                                            onChange={handleGender}
                                        />

                                        <label htmlFor="rdo-female">여</label>
                                        <input
                                            type="radio"
                                            id="rdo-female"
                                            name="gender"
                                            value="female"
                                            checked={gender === 'female'}
                                            onChange={handleGender}
                                        />
                                    </div>

                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- //modifyForm --> */}
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
};

export default ModifyForm;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    console.log(authUser);

    const handleLogout = ()=>{
        console.log('로그아웃');

        //로컬스토리지에 token 삭제
        localStorage.removeItem('token');
        //로컬스토리지에 authUser 삭제
        localStorage.removeItem('authUser');
        
        //화면반영을 위한 상태값 변경
        setToken(null);
        setAuthUser(null);
        
    };

    return (
        <>
                <div id="header" className="clearfix">
                    <h1>
                        <Link to="">MySite</Link>
                    </h1>

                    {
                        (token !== null)?(
                            <ul>
                                <li>{authUser.userName} 님 안녕하세요^^</li>
                                <li><button className="btn_s" onClick={handleLogout}>로그아웃</button></li>
                                <li><Link to="" className="btn_s" rel="noreferrer noopener">회원정보수정</Link></li>
                            </ul>
                        ):(
                            <ul>
                                <li><Link to="/user/loginform" className="btn_s" rel="noreferrer noopener">로그인</Link></li>
                                <li><Link to="/user/joinform" className="btn_s" rel="noreferrer noopener">회원가입</Link></li>
                            </ul>
                        ) 
                    }
                    
                </div>
                {/* <!-- //header --> */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="/attach/form">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}
        </>
    );
}

export default Header;
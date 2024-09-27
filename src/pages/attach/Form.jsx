// Importing necessary libraries and components
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Using Link instead of a for better routing
import axios from 'axios';


import Footer from '../include/Footer';
import Header from '../include/Header';

import '../../css/gallery.css';

const Form = () => {

    const navigate = useNavigate();

    const [profileImg, setProfileImg] = React.useState('');

    const handleImg = (e) =>{
        console.log("파일");
        setProfileImg(e.target.files[0]);
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("전송");

        const formData = new FormData();
        formData.append('profileImg', profileImg);

        console.log(formData);

        // 서버로 데이터 전송(저장)
        axios({
            method: 'post',             // put, post, delete                   
            url: 'http://localhost:9000/api/attaches',
            headers: { "Content-Type": "multipart/form-data" },  // post put
            data: formData,     // put, post,  JSON(자동변환)
        }).then(response => {
            console.log(response); 
            const saveName = response.data.apiData;
            console.log(saveName);
            navigate("/attach/Result?img=" + saveName);
        }).catch(err => {
            console.log(err);
        });

    }


    return (
        <>
            <div id="wrap">

                <Header />
                {/* <!-- //header --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>갤러리</h2>
                        <ul>
                            {/* Replacing <a> tags with <Link> components */}
                            <li><Link to="/gallery">일반갤러리</Link></li>
                            <li><Link to="/fileupload">파일첨부연습</Link></li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>첨부파일연습</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li className="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="file">
                            <form action="" method="" onSubmit = {handleSubmit} >
                                <table>
                                    <colgroup>
                                        <col style={{ width: '600px' }} />
                                    </colgroup>
                                    <tbody>
                                        {/* <tr>
                                            <td className ="text-left"> <input type = "text" name =""/></td>
                                        </tr> */}
                                        <tr>
                                            <td className="text-left"><input id="fileUpload" type="file" name="file" onChange = {handleImg}/></td>
                                        </tr>
                                        <tr>
                                                <td className="text-right"><button type="submit">파일업로드</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        {/* <!-- //file --> */}

                    </div>
                    {/* <!-- //content  --> */}
                </div>
                {/* <!-- //container  --> */}

                <Footer />
                {/* <!-- //footer --> */}
            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default Form;

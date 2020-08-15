import React from "react";
import {Button, Col, Input, message, Row} from "antd";
import InfoDisplayer from "../utils/InfoDisplayer";
import {Link} from "react-router-dom";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
            input: ''
        };

        this.handleInputChange = (event) => {
            if (/^\d*$/.test(event.target.value)) {
                this.setState({input: event.target.value});
            } else {
                message.error('请输入纯数字')
            }
        }

        this.start = () => {
            this.setState({time: '开始'})
            setTimeout(() => {
                this.setState({time: this.state.input})
                const timer = setInterval(() => {
                    this.setState({time: String(this.state.time - 1)})
                    if (this.state.time <= 0) {
                        clearInterval(timer)
                        this.setState({time: '结束'})
                    }
                }, 1000)
            }, 1000)
        }

    }

    render() {
        return (
            <div>
                <div style={{width: '30%', margin: 'auto'}}>

                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td><InfoDisplayer info={this.state.time} placeholder={'输入要倒计时的总时间'} /></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Button type={'primary'} onClick={this.start}>开始</Button></td>
                                <td><Input value={this.state.input} placeholder='enter seconds.' onChange={this.handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><Link to={'/'}><Button type={'danger'}>返回主页</Button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {};

export default Timer;

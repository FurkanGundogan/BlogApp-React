import { TextareaAutosize } from '@mui/core';
import { Save } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { Component } from 'react'
import Container from '@mui/material/Container';



export default class BlogForm extends Component {

    constructor(props){
        super(props);
            this.state={
                title:props.blog?props.blog.title:'',
            description:props.blog?props.blog.description:'',
            imgUrl:props.blog?props.blog.imgUrl:"https://www.viewstorm.com/wp-content/uploads/2014/10/default-img.gif",
            error:''
            }
    }



    onTitleChange = (e) => {
        const title=e.target.value;
        this.setState(()=>({title}))
    }

    onImgUrlChange = (e) => {
        const imgUrl=e.target.value;
        this.setState(()=>({imgUrl}))
    }

    onDescriptionChange = (e) => {
        const description=e.target.value;
        this.setState(()=>({description}))
    }

    onSubmit=(e)=>{
        e.preventDefault();

        if(!this.state.title || !this.state.description){
            this.setState({error:'Please fill the all neccesary areas'})
            //console.log("Please input neccesary areas")
        }else{
            const date=new Date(Date.now())
            this.setState({error:''})
            this.props.onSubmit({
                title:this.state.title,
                description:this.state.description,
                imgUrl:this.state.imgUrl,
                dateAdded:date.getHours()+":"+date.getMinutes()+" - "+date.getDate()+"/"+"/"+date.getMonth()+"/"+date.getFullYear() 
            });   
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Container fixed sx={{textAlign:'center',marginTop:'1%',backgroundColor:"grey",width:"fit-content",padding:"2%"}}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        
                        <div>
                            <TextField  id="demo-helper-text-misaligned-no-helper" label="Title" value={this.state.title} onChange={this.onTitleChange} inputProps={{ maxLength: 12 }} sx={{width:"310px",marginBottom:"20px"}}/>
                        </div>
                        <div>
                            <TextField  label="Image-Url" value={this.state.imgUrl}  onChange={this.onImgUrlChange} inputProps={{ maxLength: 300 }} sx={{width:"310px",marginBottom:"20px"}}/>
                        </div>
                        <div>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Write Blog..."
                                style={{ width: 300 }}
                                value={this.state.description} onChange={this.onDescriptionChange} 
                                
                            />
                        </div>
                        <div>
                            <Button startIcon={<Save/>} variant="contained" color="primary" type="submit" sx={{width:"100%",marginTop:"15px"}}>Save</Button>
                        </div>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

import {React} from 'react';
import { connect } from 'react-redux';
import './styles/styles.css'
import {addTodo, removeTodo} from './redux/action/addTodo.js'

function App({posttolist, todoPost, removetodoitem}) {  

  return (
    <div className="App">
      <div className="HeaderBar">
        <h1>My test Redux Todo</h1>
        <button onClick={() => posttolist('Custom Header, not binded to form', 'Custom footer, not binded to form')}> Add Template Post</button>
        <button onClick={() => console.log(todoPost)}>Console Log Posts</button>
        {/* on change add here, soon */}
        <input placeholder='Enter Here Header'></input>
        <input placeholder='Enter Here Content'></input>
      </div>
      <div className="bodyBar">
        { 
          todoPost.length !== 0
          ? todoPost.map(p =>
              <div 
                key={p.id}
                onClick={() => removetodoitem(p.id)}
              > {p.id}.{p.header}. 
                {p.content}
              </div>
            )
          : <div>no posts</div>
        }
      </div>
    </div>
  );
}

// () gets state as an argument
// this here we will define ITEMS that will be pushed to props for the particular 
// component, so here todoPost will be accessible for App by props.todoPost

const mapStateToProps = (state) => {
  return {
    todoPost: state.posts,
  }
}

// () gets dispatch as an argument
// this here we will define ACTIONS for the particular component, passed to props. 
// dispatch(addTodo('123', '123')) will be accessible for App by props.posttolist
// IMPORTANT - we call the func in the posttolist: () => dispatch(action(args...))

function mapDispatchToProps(dispatch) {

  return {
    posttolist: (header, content) => dispatch(addTodo(header, content)),
    removetodoitem: (id) => dispatch(removeTodo(id))
  };
}




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
(App);


// task for future:
// add state dropper when all todo done
// add mark todo
// add correct inputs binded with state through redux


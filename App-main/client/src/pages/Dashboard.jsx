import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import Spinner from '../components/Spinner';
import { getTasks } from '../features/tasks/taskSlice';
import { reset } from '../features/auth/authSlice';
import wavingHandIcon from '../assets/images/wave.png';


function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks);

  const [serverMessage, setServerMessage] = useState('');
  fetch('/api/getMessage')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message))
      .catch((error) => console.error('Error fetching server message:', error));

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getTasks());

 
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
    <section className="servermessage">
        <h1>
        {serverMessage} !
          
          
        </h1>
      </section>

      <section className="welcome-section">
  <div className="waving-hand">
    <img src={wavingHandIcon} alt="Waving Hand" />
  </div>
  <div className="welcome-text">
    Welcome to your tasklist, {user && user.name}!
  </div>
</section>

      <TaskForm />

      <section className="content">
        {tasks.length > 0 ? (
          <div className="tasks">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task} />
            ))}
          </div>
        ) : (
          <h3>No tasks created!</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;

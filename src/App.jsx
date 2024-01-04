import { Button, Container, Dropdown, Row, Spacer, Table, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { userService } from './core/services/userService';
import { todoService } from './core/services/todoService';
import { taskService } from './core/services/taskService';
import { DoneIcon } from './shared/icons/doneIcon';
import { InprogressIcon } from './shared/icons/inprogressIcon';
import { countDoneTask } from './shared/utils/countDoneTasks';
import { sortTodos } from './shared/utils/sortTodo';

export default function App() {
    // const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    // const [currentUser, setCurrentUser] = useState('');
    // const [doneTasksNum, setDoneTasksNum] = useState(0);
    // const [isLoading, toggleLoading] = useState(false);
    // const [taskPending, setTaskPending] = useState(null);

    // // Get users
    // useEffect(() => {
    //     userService.getUsers()
    //         .then(
    //             (res) => {
    //                 setUsers(res.data);
    //             }
    //         )
    // }, []);

    // // Get tasks
    // useEffect(() => {
    //     if (currentUser !== '') {
    //         todoService.getTodo(currentUser)
    //             .then(
    //                 (res) => {
    //                     setTasks(sortTodos(res.data));
    //                     setDoneTasksNum(countDoneTask(res.data));
    //                 }
    //             )
    //     }
    // }, [currentUser]);

    useEffect(() => {
        taskService.getTodo() 
            .then((res) => {
                setTasks(res.data)
            })
    }, [])

    // const markDone = (taskId) => {
    //     toggleLoading(true);
    //     setTaskPending(taskId);
    //     todoService.markDoneTodo(taskId)
    //         .then(
    //             (res) => {
    //                 setTasks(
    //                     sortTodos(tasks.map((task) => {
    //                         if (task.id === taskId) {
    //                             task = res.data;
    //                         }
    //                         return task;
    //                     }))
    //                 );
    //                 setTaskPending(null);
    //                 toggleLoading(false);
    //             }
    //         )
    // }

    // // Update number of tasks done
    // useEffect(() => {
    //     setDoneTasksNum(countDoneTask(tasks));
    // }, [tasks])

    return (
        <Container>
            <Row justify='space-between'>
                <Text h4 color='secondary'>TASKS</Text>
            </Row>
            <Table
                bordered
                shadow={true}
                aria-label="pagination  table"
                color={"secondary"}
                css={{
                    height: "auto",
                    width: "stretch"
                }}
            >
                <Table.Header>
                    <Table.Column align='start'>TASK</Table.Column>
                </Table.Header>
                <Table.Body>
                    {
                        tasks.length === 0 &&
                        <Table.Row>
                            <Table.Cell>
                                <Text color='secondary'>-- No data --</Text>
                            </Table.Cell>
                        </Table.Row>

                    }
                    {
                        tasks.map((task) => {
                            return (
                                <Table.Row key={task.id}>
                                    <Table.Cell>
                                        <Row align='center'>
                                            {task.content}
                                        </Row>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                />
            </Table>
            <Spacer y={2} />
        </Container>
    );
};
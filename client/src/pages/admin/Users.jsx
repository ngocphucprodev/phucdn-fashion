import {
  CardMedia,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const Users = () => {
  const [users, setUser] = useState("");
  console.log("users", users);
  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
  return (
    <React.Fragment>
      <div>
        <table style={{ maxWidth: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Ảnh </TableCell>
              <TableCell align="center">Tên khách hàng</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Giới tính</TableCell>
              <TableCell align="center">Số điện thoại</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Ngày cập nhập</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={require(`../../../public/images/${
                          user.image ? user.image : "err.png"
                        }`)}
                        alt="green iguana"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.gender} </TableCell>
                    <TableCell>{user.telephone} </TableCell>
                    <TableCell>{user.createdAt} </TableCell>
                    <TableCell>{user.updatedAt}</TableCell>
                    <TableCell>
                      <DeleteIcon
                        onClick={() => handleRemove(user._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell>
                    <TableCell>
                      {/* <Link to={`/products/edit/${product._id}`}> */}
                      <EditOutlinedIcon
                        onClick={() => console.log(user._id)}
                        sx={{ color: "#1976d2" }}
                      />
                      {/* </Link> */}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Users;

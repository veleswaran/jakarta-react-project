package com.example.rest;

import com.example.model.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;
import com.example.dao.UserDAO;
import jakarta.inject.Inject;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @Inject
    private UserDAO userDAO;

    // Create a new user
    @POST
    public Response createUser(User user) {
       try {
            User createdUser = userDAO.create(user);
            return Response.status(Response.Status.CREATED).entity(createdUser).build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    // Get all users
    @GET
    public List<User> getUsers() {
        return userDAO.findAll();
    }

    // Get user by ID
    @GET
    @Path("{id}")
    public User getUser(@PathParam("id") Long id) {
        return userDAO.find(id);
    }

    // Update user
    @PUT
    @Path("{id}")
    public Response updateUser(@PathParam("id") Long id, User user) {
        try {
            user.setId(id);
            User updatedUser = userDAO.update(user);
            if (updatedUser == null) {
                return Response.status(Response.Status.NOT_FOUND).build();
            }
            return Response.ok(updatedUser).build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    // Delete user
    @DELETE
    @Path("{id}")
    public Response deleteUser(@PathParam("id") Long id) {
        try {
            boolean deleted = userDAO.delete(id);
            if (!deleted) {
                return Response.status(Response.Status.NOT_FOUND).build();
            }
            return Response.noContent().build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }
}

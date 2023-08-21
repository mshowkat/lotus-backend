const express = require("express");
const {
	createComment,
	updateComment,
	deleteComment,
	getAllMovieComments,
	getUserBasedComments,
} = require("../controllers/commnetController");
const router = express.Router();

//since these all has the same route so instead of writing it multiple time this is a shortcut
router.route("/").post(createComment).get(getUserBasedComments);

router
	.route("/:id")
	.get(getAllMovieComments)
	.put(updateComment)
	.delete(deleteComment);

module.exports = router;

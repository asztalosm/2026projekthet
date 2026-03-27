extends CharacterBody2D
const SPEED = 550.0
const JUMP_VELOCITY = -400.0

var initial_cursor_position = null
var release_cursor_position = null
#region movement
func slingshotMovementStart() -> void:
	initial_cursor_position = get_local_mouse_position()
	#if (is_on_floor()):
	#else:
	#	initial_cursor_position = null

func slingshotMovementRelease() -> void:
	
	if (initial_cursor_position != null):
		release_cursor_position = get_local_mouse_position()
		sling_movement()
	else:
		release_cursor_position = null

func sling_movement() -> void:
	var initial_velocity = initial_cursor_position - (release_cursor_position)
	position += Vector2(0,-5)
	velocity.y = initial_velocity.y
	velocity.x = initial_velocity.x
	

#endregion
func _physics_process(delta: float) -> void:
	#region movement
	if not is_on_floor():
		velocity += get_gravity() * delta
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED/10)
	#endregion
	#region keybinds
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY
	
	if (Input.is_action_just_pressed("slingMovement")):
		slingshotMovementStart()
		
	if (Input.is_action_just_released("slingMovement")):
		slingshotMovementRelease()
	#endregion

	move_and_slide()

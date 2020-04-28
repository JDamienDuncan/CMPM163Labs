# CMPM163Labs
Lab2:
	Part1: https://drive.google.com/file/d/10-3_6914svjfTknbPBw1vMViFUNE5F-C/view?usp=sharing
	![](https://github.com/JDamienDuncan/Personal/blob/master/Images/Lab2_Part2.PNG)

Lab3:
	Video: https://drive.google.com/file/d/10KK5qyUXiHmvNQuFaYh4ZESA72sceYle/view?usp=sharing
	Cubes(From Left to Right):
		Cube1: This cube was the goal of the second part of the lab and its color interpolates between 
		       two input colors, in this case aquamarine and perano. This was set up in the shader 
		       created during the tutorial.
		Cube2: This cube was the result of first part of the lab and is a grey/white cube that is 
		       repetively highlighted by a green gleam due a specular reflection set to 0x00ff00.
		Cube3: This was the first personally created cube for the first part of the lab that required
		       a new unique cube to be added. Unlike the previous cube, this cube is white and radiates
		       red color through the emissitvity color being set to red. Though the cube's color is 
		       is white, it will constantly appear red, besides the side closest to the user.
		Cube4: The 4th cube, the result of the final portion of part two, acts in similar ways to the 
		       first cube. This cube interpolates between white and red, making the effect of the 
		       shader more clear to the naked eye. The final cube is also making use of its wireframe
		       form, making the cube invisible besides its edges. With this effect, the red appears
		       to chase the corner in which moves closet to the user. This was set up by the usage of
		       a second fragment shader.  

Lab4:
		Video: https://drive.google.com/file/d/1BRLd9vqmi1Y8hOF0cq2_VqDvjTGPhHUY/view?usp=sharing
		Questions:
			24a:
				x = 8u and u = x/8
			24b
				y = 8v and v = y/8
			24c
		        (u,v) = (.325,.25)
				x = 8(.325) = 2.6
				y = 8(.25) = 2
				(x,y) = (2.6,2) -> White
				White
		
		(LEFT to RIGHT)
		
		Cube1:
			This cube was the goal of the final section of the second part of the lab. The goal of for this cube
			cube was to place a texture on different faces, pixels, of the cube, giving it a tiling-like apperance.
			I was able to create the first tile at the left most face, but failed to finish the goal. I understood
			that in order to create this effect, I had to alter the vec2 being loaded into the texture2D function
			in my shaders, but for some reason, I wasn't able to get the desired effect. The effect that I did manage
			I did by changing the face in which the texture loaded, but I don't understand how I am suppose load the 
			texture into 3 other locations. 
		Cube2:
			This cube part of the goal for the first part of lab, where use of normal maps is explored. This cube served
			to show the difference on how the use of a normal map affects a textures interaction with changes in light. 
			This cube's faces, which had no normal map applied, all dim at the same rate, making the texture look less
			defined and complex. 
		Cube3:
			This cube part of the goal for the first part of lab, where use of normal maps is explored. This cube served
			to show the difference on how the use of a normal map affects a textures interaction with changes in light. 
			This cube is the same as Cube2, but does have normal map applied, so pixels change at different rates dependent 
			on location and light. This gives Cube3 a more defined and complex look as light changes, in this case, dims.
		Cube4:
			This cube was the goal of the final section of the first part of the lab. This cube is nearly the same as cube3,
			as it has a normal map applied on its texture, but this cube uses a different texture pack, further showing the
			diverse affects of normal mapping. The purpose of this cube in the lab was simply to further explore normal mapping
			on different textures and examples. 
		Cube5:
			This cube is part of the goal for the final part of lab, and serves to introduce the usage of normal maps in pairing
			with shaders. This cube is rendered using shaders and has a normal applied to its texture. The most important note
			in the creation of this cube is that the fragment shader returns a texture instead of simple color. This cube is also 
			unaffected by the change in light shown in the program. 
	
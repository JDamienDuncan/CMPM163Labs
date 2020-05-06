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
		Video: https://drive.google.com/file/d/10lOcz9LZNNPgXYz6pAZ-NjW6AreuYo2Z/view?usp=sharing
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

Lab 5:
	Chosen Path: Path 1(Unity Adventure)
	Video: https://drive.google.com/file/d/11qX9M0uNjM4lyFgljk2Je9prq0zsASNh/view?usp=sharing
	
	What I did:
		First I added 3 particle system that appear at the tail of the player's cart. The idea overall was to create a fire 			effect that was being emitted from the back of the card, similar to a rocket. I did this by changing the shape of the 
		particles to spherical, enchancing the size of particles so that would overlap, and increasing the emission speed and 
		limit. I did the same with the second and third particles systems as well, but, different from the first, I increased 
		particles life time and the angle in which the particles were released to create the effect that is shown at the back
		of the cart. 
		On top of the main cart effect, I placed simple yellow particle systems at each of the track's checkpoint, making it 
		clearer to see them. I decreased the game's max time from 60 seconds to 30, to make the game slightly more difficult. 
		I also changed the colors of everything in the environment. The trees are now red, the hills are green, the clouds are 			blue, the rocks are yellow, and the sun, for a good old Bloodborne easter egg, is also now red. The ground is also black 		 now. On top of these minor changes, instead of changing the material the sky box like the assignment suggest, I changed 		 the player's material into the default material of the sky box, along with the kart and its wheels. The last change I 
		made was changing the color of light emitted from the 'sun' to neon green, so object shadows have a clear green tint, ob		obvious some places more then others. Hopefully that is enough changes. 
	Side Note: My Lab 4 has a 0/7 right now after I was told to fix a link error involving the video. I did that and commented on 
		the submission as told too and I just haven't heard anything back yet. I know everyone is busy and I'm not trying to
		pressure anyone, just wanted to bring it up when I had the chance. Thank you! :)

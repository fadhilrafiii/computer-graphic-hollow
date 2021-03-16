function setGeometry(gl) {
    var positions = new Float32Array([
            // Front Rigid Face
           // Face
            0,   0,  0,
            0, 150,  0,
            30,   0,  0,
            0, 150,  0,
            30, 150,  0,
            30,   0,  0,
  
            30,   0,  0,
            30,  30,  0,
            120,   0,  0,
            30,  30,  0,
            120,  30,  0,
            120,   0,  0,

            120,0,0,
            120,150,0,
            150,0,0,
            120,150,0,
            150,150,0,
            150,0,0,

            30,   120,  0,
            30,  150,  0,
            120,   120,  0,
            30,  150,  0,
            120,  150,  0,
            120,   120,  0,

            // Back
            120, 0, 30,
            120, 30, 30,
            30, 0, 30,
            120, 30, 30,
            30, 30, 30,
            30, 0, 30,

            150, 30, 30,
            150, 120, 30,
            120, 30, 30,
            150, 120, 30,
            120, 120, 30,
            120, 30, 30,

            120, 120, 30,
            120, 150, 30,
            30, 120, 30,
            120, 150, 30,
            30, 150, 30,
            30, 120, 30,

            30, 30, 30,
            30, 120, 30,
            0, 30, 30,
            30, 120, 30,
            0, 120, 30,
            0, 30, 30,


            // Top Outer
            0, 0, 30,
            0,0,0,
            150,0,30,
            0,0,0,
            150,0,0,
            150,0,30,

            // Top Inner (Bottom blocks)
            30, 120, 30,
            30,120,0,
            120,120,30,
            30,120,0,
            120,120,0,
            120,120,30,
    

            // Bottom Outer
            0,150,0,
            0,150,30,
            150,150,0,
            0,150,30,
            150,150,30,
            150,150,0,

            // Bottom Inner (Top Block)
            30,30,0,
            30,30,30,
            120,30,0,
            30,30,30,
            120,30,30,
            120,30,0,

             //Normal (1, 0, 0)
            150, 0, 0,
            150, 150,0,
            150, 0,30,
            150, 150,0,
            150, 150,30,
            150, 0,30,

            30, 30, 0,
            30, 120,0,
            30, 30,30,
            30, 120,0,
            30, 120,30,
            30, 30,30,

            // Normal (-1,0,0)
            0,0,30,
            0,150,30,
            0,0,0,
            0,150,30,
            0,150,0,
            0,0,0,

            120,30,30,
            120,120,30,
            120,30,0,
            120,120,30,
            120,120,0,
            120,30,0,


            ///////// Back Rigid Face /////////
           // Front
            150, 0, 150,
            150, 150, 150,
            120, 0, 150,
            150, 150, 150,
            120, 150, 150,
            120, 0, 150,

            120, 0, 150,
            120, 30, 150,
            30, 0, 150,
            120, 30, 150,
            30, 30, 150,
            30, 0, 150,

            120, 120, 150,
            120, 150, 150,
            30, 120, 150,
            120, 150, 150,
            30, 150, 150,
            30, 120, 150,

            30, 0, 150,
            30, 150, 150,
            0, 0, 150,
            30, 150, 150,
            0, 150, 150,
            0, 0, 150,


            // Back
            0, 30, 120,
            0, 120, 120,
            30, 30, 120,
            0, 120, 120,
            30, 120, 120,
            30, 30, 120,

            30, 0, 120,
            30, 30, 120,
            120, 0, 120,
            30, 30, 120,
            120, 30, 120,
            120, 0, 120,

            120, 30, 120,
            120, 120, 120,
            150, 30, 120,
            120, 120, 120,
            150, 120, 120,
            150, 30, 120,

            30, 120, 120,
            30, 150, 120,
            120, 120, 120,
            30, 150, 120,
            120, 150, 120,
            120, 120, 120,


           // Top Outer
           0, 0, 150,
           0,0,120,
           150,0,150,
           0,0,120,
           150,0,120,
           150,0,150,

           // Top Inner (Bottom Block)
           30, 120, 150,
           30,120,120,
           120,120,150,
           30,120,120,
           120,120,120,
           120,120,150,

           // Bottom Outer
           0,150,120,
           0,150,150,
           150,150,120,
           0,150,150,
           150,150,150,
           150,150,120,

           // Bottom Inner
           30,30,120,
           30,30,150,
           120,30,120,
           30,30,150,
           120,30,150,
           120,30,120,

           // Right Outer
           150, 0, 120,
           150, 150,120,
           150, 0,150,
           150, 150,120,
           150, 150,150,
           150, 0,150,

           // Right Inner (Left Block)
            30, 30, 120,
            30, 120, 120,
            30, 30, 150,
            30, 120, 120,
            30, 120, 150,
            30, 30, 150,

           // Left Outer
           0,0,150,
           0,150,150,
           0,0,120,
           0,150,150,
           0,150,120,
           0,0,120,

            // Left Inner (Right Block)
           120,30,150,
           120,120,150,
           120,30,120,
           120,120,150,
           120,120,120,
           120,30,120,

           ////////// Right Top Block //////////
           150,0,30,
           150,30,30,
           150,0,120,
           150,30,30,
           150,30,120,
           150,0,120,

           120, 0, 120,
           120, 30, 120,
           120, 0, 30,
           120, 30, 120,
           120, 30, 30,
           120, 0, 30,

           120, 0, 30,
           150, 0, 30,
           120, 0, 120,
           150, 0, 30,
           150, 0, 120,
           120, 0, 120,

           120, 30, 30,
           120, 30, 120,
           150, 30, 30,
           120, 30, 120,
           150, 30, 120,
           150, 30, 30,

           ////////// Right Bottom Block /////////
           150,120,30,
           150,150,30,
           150,120,120,
           150,150,30,
           150,150,120,
           150,120,120,

           120, 120, 120,
           120, 150, 120,
           120, 120, 30,
           120, 150, 120,
           120, 150, 30,
           120, 120, 30,

           120, 120, 30,
           150, 120, 30,
           120, 120, 120,
           150, 120, 30,
           150, 120, 120,
           120, 120, 120,

           120, 150, 30,
           120, 150, 120,
           150, 150, 30,
           120, 150, 120,
           150, 150, 120,
           150, 150, 30,

           ////////// Left Top Block //////////
           0, 0, 120,
           0, 30, 120,
           0, 0, 30,
           0, 30, 120,
           0, 30, 30,
           0, 0, 30,

           30, 0, 30,
           30, 30, 30,
           30, 0, 120,
           30,30,30,
           30, 30, 120,
           30, 0, 120,

           0, 0, 30,
           30, 0, 30,
           0, 0, 120,
           30, 0, 30,
           30, 0, 120,
           0, 0, 120,

           0, 30, 30,
           0, 30, 120,
           30, 30, 30,
           0, 30, 120,
           30, 30, 120,
           30, 30, 30,

           ////////// Left Bottom Block /////////
           0, 120, 120,
           0, 150, 120,
           0, 120, 30,
           0, 150, 120,
           0, 150, 30,
           0, 120, 30,

           30,120,30,
           30,150,30,
           30,120,120,
           30,150,30,
           30,150,120,
           30,120,120,

           0, 120, 30,
           30, 120, 30,
           0, 120, 120,
           30, 120, 30,
           30, 120, 120,
           0, 120, 120,

           0, 150, 30,
           0, 150, 120,
           30, 150, 30,
           0, 150, 120,
           30, 150, 120,
           30, 150, 30,
  
            ]);
  
    // Center the F around the origin and Flip it around. We do this because
    // we're in 3D now with and +Y is up where as before when we started with 2D
    // we had +Y as down.
  
    // We could do by changing all the values above but I'm lazy.
    // We could also do it with a matrix at draw time but you should
    // never do stuff at draw time if you can do it at init time.
    var matrix = m4.xRotation(Math.PI);
    matrix = m4.translate(matrix, -50, -75, -15);
  
    for (var ii = 0; ii < positions.length; ii += 3) {
      var vector = m4.transformPoint(matrix, [positions[ii + 0], positions[ii + 1], positions[ii + 2], 1]);
      positions[ii + 0] = vector[0];
      positions[ii + 1] = vector[1];
      positions[ii + 2] = vector[2];
    }
  
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  }
  
  function setNormals(gl) {
    var normals = new Float32Array([
            ///////// Front Rigid Face //////////
            // Front
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
  
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
  
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            // Back
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
  
            // Top Outer
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            // Top Inner (Bottom block)
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
  
            // Bottom Outer
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            // Bottom Inner (Top block)
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
  
            // Right Outer
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            // Right Inner (Left block)
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            // Left Outer
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            // Left Inner (Right block)
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            ///////// Back Rigid Face //////////
            // Front
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
  
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
  
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            // Back
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
  
            // Top Outer
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            // Top Inner (Bottom block)
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
  
            // Bottom Outer
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            // Bottom Inner (Top block)
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
  
            // Right Outer
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            // Right Inner (Left block)
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            // Left Outer
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            // Left Inner (Right block)
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            /////// Right Top Block ///////////
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            /////// Right Bottom Block ///////////
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            /////// Left Top Block ///////////
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            /////// Left Bottom Block ///////////
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            /////////// Right TOP Block /////////////

  
            ]);
    gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
  }
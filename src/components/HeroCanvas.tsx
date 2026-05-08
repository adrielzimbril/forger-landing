"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p,0,1); }`;
    const fs = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      
      // simple 2D noise
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i+vec2(0,0)),hash(i+vec2(1,0)),u.x),
                   mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
      }
      
      void main(){
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 p = uv;
        float t = u_time*0.15;
        
        float n = noise(p*3.0 + vec2(t, t*0.7));
        n += 0.5*noise(p*6.0 - vec2(t*1.3, t));
        n += 0.25*noise(p*12.0 + vec2(t*0.5, -t*0.8));
        n /= 1.75;
        
        vec3 c1 = vec3(1.0, 0.72, 0.45); // peach
        vec3 c2 = vec3(0.96, 0.48, 0.18); // orange
        vec3 c3 = vec3(0.52, 0.65, 0.35); // grass green
        vec3 c4 = vec3(0.92, 0.94, 0.88); // cream
        
        vec3 col = mix(c3, c1, smoothstep(0.2, 0.6, n + uv.y*0.4));
        col = mix(col, c2, smoothstep(0.55, 0.85, n*uv.y + 0.2));
        col = mix(col, c4, smoothstep(0.0, 0.3, 1.0-uv.y - n*0.3) * 0.4);
        
        // soft vignette
        float vig = smoothstep(1.2, 0.4, distance(uv, vec2(0.5)));
        col *= 0.85 + 0.15*vig;
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }
    const prog = gl.createProgram();
    if (!prog) return;
    const vertexShader = compile(gl.VERTEX_SHADER, vs);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pLoc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(pLoc);
    gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const start = performance.now();
    let frameId: number;
    const render = () => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}


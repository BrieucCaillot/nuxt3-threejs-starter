uniform vec3 uColor;

void main() {
  vec4 color = vec4(uColor, 1.0);

  gl_FragColor = color;
}

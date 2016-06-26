#version 150
// shader for wave visualization in left panel

uniform sampler2DRect tex0;
uniform float alpha_adjust;

// The texture coordinate associated with the fragment
in vec2 texCoordVarying;

out vec4 outputColor;

in vec4 vPos;

void main() {
    float r = 0.32;
    float g = 0.41;
    float b = 0.36;

    float ax = (200 - abs(vPos.x)) / 200 + 0.4;
    float ay = (200 - abs(vPos.y)) / 200 + 0.4;

    float alpha = clamp(ax * ay, 0, 1) * texture(tex0, texCoordVarying)[0] * alpha_adjust;
    alpha = clamp(alpha,0,1);

    outputColor = vec4(r, g, b, alpha);
}

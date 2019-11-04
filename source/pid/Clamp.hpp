#ifndef CLAMP_HPP
#define CLAMP_HPP

#include <stdint.h>

struct Bounds {
    int16_t lower;
    int16_t upper;
};

class Clamp {
    Bounds bounds;

public:
    inline static Clamp makeFromBounds(Bounds bounds) {
        return Clamp(bounds);
    }

    Clamp(Bounds bounds): bounds{bounds} {}
    Clamp() {}
    int16_t clamp(int16_t value) {
        return (value < bounds.lower) ? bounds.lower :
            (value > bounds.upper) ? bounds.upper:
            value;
    }
};

#endif

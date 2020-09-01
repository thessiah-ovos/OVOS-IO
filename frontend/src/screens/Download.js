import React from 'react';
import imgTest from '../rotator/green-foreground.svg';

function Download() {
    return (
        <div>
            <div class="imgs">
                <a href={imgTest} download>
                    <button type="button" class="btn btn-indigo btn-lg">Download </button>
                </a>
            </div>
        </div>
    )
}

export default Download;
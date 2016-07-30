import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import io from 'socket.io-client';
const socket = io.connect('/inventory');
import { ClassesType } from "./App";


const Contacts = ({ classes }: { classes: ClassesType }) => {
    return (
        <div id="contact-us" className="container-fluid">
            <div className={classes.row}>
                <div className={classes.col_1}>
                    <div className={classes.col_1_row}>
                        <div className={classes.col_1_row_col_1}>
                            <div id="side-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                        <div className={classes.col_1_row_col_2}>
                            <h1>Contacts</h1>
                            <p>
                                Our clinic hours is from 8:00 A.M. to 4:00 PM Tuesdays to Sundays except Mondays.
                            </p>
                        </div>
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th><strong>Telephone Number</strong></th>
                                <td>(02) 696-9858</td>
                            </tr>
                            <tr>
                                <th><strong>E&minus;mail</strong></th>
                                <td>
                                    enstreatment@yahoo.com
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Contacts;
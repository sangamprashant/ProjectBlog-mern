import React from 'react'

function WebProject({type, heading,userName}) {
  return (
    <div>
      <div class="drive-wrapper drive-list-view">
                  <div class="table-responsive drive-items-table-wrapper">
                    <table class="table">
                      <thead>
                        <tr>
                          <td class="type">
                            <i class="fa fa-folder text-primary"></i>
                          </td>
                          <td class="name truncate">
                            <a href="#">{heading}</a>
                          </td>
                          <td class="date">7 Projects</td>
                          <td class="size">--</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>

                <div class="drive-wrapper drive-grid-view ">
                  <div class="grid-items-wrapper ">
                    <div
                      class="drive-item module text-center"
                      style={{ width: "300px" }}
                    >
                      <div class="drive-item-inner module-inner">
                        <div class="drive-item-title">
                          <a href="#">Image DS2314.JPG</a>
                        </div>
                        <div class="drive-item-thumb">
                          <a href="#">
                            <img
                              class="img-responsive"
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="drive-item-footer module-footer">
                        <ul class="utilities list-inline">
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Download"
                            >
                              <i class="fa fa-download"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default WebProject

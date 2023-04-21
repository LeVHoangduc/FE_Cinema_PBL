/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
export default function Cinema() {
  return (
    <div className="col-1">
      <ul className="list-group">
        <li className="list-group-item list-group-region list-cinema-item">
          <a
            href="#"
            className="list-group-item list-group-item-action disabled bg-light"
          >
            <img
              src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png"
              alt
              className="rounded-circle float-left mr-3"
              width={24}
            />
          </a>
          <span>Cinestar</span>
        </li>
        <li className="list-group-item ">
          <a href="#" className="list-group-item item" data-cinema={118366}>
            Cinestar Quốc Thanh
          </a>
        </li>

        <li className="list-group-item ">
          <a href="#" className="list-group-item item" data-cinema={126681}>
            Cinestar Hai Bà Trưng
          </a>
        </li>
      </ul>
      <ul className="list-group">
        <li className="list-group-item list-group-region list-cinema-item">
          <a href="#" className="list-group-item ">
            <img
              src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/4e2f8af9e4d780495cbc387e5868c2a48c7f82c2.png"
              alt
              className="rounded-circle float-left mr-3"
              width={24}
            />
          </a>
          <span> Mega GS Cinemas</span>
        </li>
        <li className="list-group-item ">
          <a href="#" className="list-group-item item" data-cinema={123414}>
            Mega GS Cao Thắng
          </a>
        </li>
        <li className="list-group-item ">
          <a href="#" className="list-group-item item" data-cinema={126815}>
            Mega GS Lý Chính Thắng
          </a>
        </li>
      </ul>
      <ul className="list-group">
        <li className="list-group-item list-group-region list-cinema-item">
          <a href="#" className="list-group-item ">
            <img
              src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/a1cd7de61579e7bca68c7bee4d76c4c7388478cb.png"
              alt
              className="rounded-circle float-left mr-3"
              width={24}
            />
          </a>
          <span> Dcine</span>
        </li>
        <li className="list-group-item ">
          <a href="#" className="list-group-item item" data-cinema={126807}>
            Beta Quang Trung
          </a>
        </li>
      </ul>
    </div>
  );
}

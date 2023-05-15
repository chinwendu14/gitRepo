import React, { useState, useEffect } from "react";
import styles from "../../../styles/body.module.scss";
import { BsBook, BsBox, BsStar } from "react-icons/bs";
import { RiGitRepositoryLine, RiBookReadLine } from "react-icons/ri";
import Setting from "../setting/Setting";
import SubHeader from "../subHeader/SubHeader";
import Repos from "../repos/Repos";
import { restApi } from "../../restApi/restApi";
import moment from "moment";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";
const Body = () => {
  const [repoApi, setRepoApi] = useState([]);
  const [search, setSearch] = useState("");
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          setSpin(false);
          console.log("reeee", res);
        } else {
          setSpin(true);
        }
      };
      api();
    } catch (error) {}
  }, []);

  const handleSearch = async (e: any) => {
    const Seachvalue = e.target.value;
    setSearch(Seachvalue);
    console.log(search);
    const data = await restApi();
    const res = data;

    if (res) {
      const filter = res?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setTimeout(() => {
        setRepoApi(filter);
      }, 1000);
    }
  };
  const handleAll = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter((item: any) => item.name);
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };
  const handlePublic = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter((item: any) => item.visibility);
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };

  const handleAllLang = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter((item: any) => item.language);
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };
  const handleJavaScript = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter(
            (item: any) => item.language === "JavaScript"
          );
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };
  const handlehtml = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter((item: any) => item.language === "HTML");
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };
  const handleTypeScript = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter(
            (item: any) => item.language === "TypeScript"
          );
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };

  const handleName = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const filter = res?.filter((item: any) => item.name);
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };

  const handleLastest = () => {
    try {
      const api = async () => {
        const data = await restApi();
        const res = data;
        if (res) {
          setRepoApi(res);
          const dateYear = new Date().getFullYear();
          const filter = res?.filter(
            (item: any) => new Date(item.updated_at).getFullYear() === dateYear
          );
          setRepoApi(filter);
        }
      };
      api();
    } catch (error) {}
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.body__containerHeader}>
          <div className={styles.body__containerFlex}>
            <p>
              <span>
                <i>
                  <BsBook />
                </i>
              </span>
              Overview
            </p>
            <p className={styles.fill}>
              <span>
                <i>
                  <RiGitRepositoryLine />
                </i>
              </span>
              Repositories
              <span className={styles.fillspan}>16</span>
            </p>
            <p>
              <span>
                <i>
                  <RiBookReadLine />
                </i>
              </span>
              projects
            </p>
            <p>
              <span>
                <i>
                  <BsBox />
                </i>
              </span>
              packages
            </p>
            <p>
              <span>
                <i>
                  <BsStar />
                </i>
              </span>
              star
            </p>
          </div>
        </div>

        <div className={styles.body__containerflexRepoSetting}>
          <div className={styles.body__containerflexSetting}>
            <Setting />
          </div>
          <div className={styles.body__containerflexRepo}>
            <SubHeader
              value={search}
              onChange={handleSearch}
              all={handleAll}
              publi={handlePublic}
              allLag={handleAllLang}
              javascript={handleJavaScript}
              html={handlehtml}
              typescript={handleTypeScript}
              name={handleName}
              lastest={handleLastest}
            />

            {spin ? (
              <SpinnerLoader />
            ) : (
              repoApi?.map((item) => {
                return (
                  <Repos
                    key={item.id}
                    name={item.name}
                    language={item.language}
                    publi={item.visibility}
                    update={moment(`${item.updated_at}`).format("MMMM Do YYYY")}
                    classNm={
                      item.language === "JavaScript"
                        ? styles.yellow
                        : item.language === "HTML"
                        ? styles.red
                        : item.language === "TypeScript"
                        ? styles.blue
                        : ""
                    }
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

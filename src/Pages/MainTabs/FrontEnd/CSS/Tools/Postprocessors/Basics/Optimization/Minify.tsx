import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Minify = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/Minify';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Minify (cssnano / csso)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Minify;

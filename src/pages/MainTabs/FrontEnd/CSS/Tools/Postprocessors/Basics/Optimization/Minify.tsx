import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Minify = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/Minify';

  return (
    <>
      <PageLayout>
        <PageTitle title="Minify (cssnano / csso)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Minify;

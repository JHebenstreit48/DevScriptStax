import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndFunctions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/MixinsAndFunctions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins & Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndFunctions;

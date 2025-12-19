import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndFunctions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/MixinsAndFunctions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mixins & Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndFunctions;

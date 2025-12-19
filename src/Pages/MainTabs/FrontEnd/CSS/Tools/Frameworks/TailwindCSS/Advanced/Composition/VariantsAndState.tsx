import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariantsAndState = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/VariantsAndState';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Variants & State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariantsAndState;

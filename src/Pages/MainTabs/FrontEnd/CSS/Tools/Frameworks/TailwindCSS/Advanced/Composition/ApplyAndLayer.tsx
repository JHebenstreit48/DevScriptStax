import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ApplyAndLayer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/ApplyAndLayer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="@apply & @layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApplyAndLayer;
